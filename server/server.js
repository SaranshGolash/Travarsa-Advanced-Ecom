require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running normally" });
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const { authenticateToken, requireRole } = require("./middleware/auth");

// Google Auth Login/Register
app.post("/api/auth/google", async (req, res) => {
  const { credential, profile } = req.body;
  try {
    let email, name, googleId;

    try {
      // Attempt strict verification first
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      email = payload.email;
      name = payload.name;
      googleId = payload.sub;
    } catch (verifyErr) {
      // Fallback for development if keys are missing but frontend fetched profile via access_token
      if (profile && profile.email) {
        email = profile.email;
        name = profile.name;
        googleId = profile.sub;
      } else {
        throw new Error("Invalid Token and no profile provided");
      }
    }

    let userResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    let user = userResult.rows[0];

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(
        `google-${googleId}-${Date.now()}`,
        salt,
      );
      const newUserResult = await db.query(
        "INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role",
        [name, email, password_hash, "customer"],
      );
      user = newUserResult.rows[0];
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "your_super_secret_jwt_key_here",
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
    );

    res.json({
      message: "Google login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(401).json({ error: "Invalid Google credential" });
  }
});

// Register user
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  // Prevent users from registering as admin
  const userRole = role === "vendor" || role === "customer" ? role : "customer";

  try {
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    const result = await db.query(
      "INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role",
      [username, email, password_hash, userRole],
    );

    // Generate JWT
    const token = jwt.sign(
      { id: result.rows[0].id, role: result.rows[0].role },
      process.env.JWT_SECRET || "your_super_secret_jwt_key_here",
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
    );

    res.json({ message: "User registered", user: result.rows[0], token });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Internal server error. Username or email might exist." });
  }
});

// Login user
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValid = await bcrypt.compare(password, user.password_hash);
      if (isValid) {
        // Generate JWT
        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET || "your_super_secret_jwt_key_here",
          { expiresIn: process.env.JWT_EXPIRES_IN || "7d" },
        );

        res.json({
          message: "Login successful",
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
          },
          token,
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ==========================================
// VENDOR ROUTES
// ==========================================
app.get(
  "/api/vendor/products",
  authenticateToken,
  requireRole("vendor"),
  async (req, res) => {
    try {
      const result = await db.query(
        "SELECT * FROM products WHERE vendor_id = $1 ORDER BY id DESC",
        [req.user.id],
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.post(
  "/api/vendor/products",
  authenticateToken,
  requireRole("vendor"),
  async (req, res) => {
    const { name, price, category, img, tag } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO products (name, price, category, img, tag, vendor_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, price, category, img, tag, req.user.id],
      );
      res.json({ message: "Product added", product: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.delete(
  "/api/vendor/products/:id",
  authenticateToken,
  requireRole("vendor"),
  async (req, res) => {
    try {
      const result = await db.query(
        "DELETE FROM products WHERE id = $1 AND vendor_id = $2 RETURNING *",
        [req.params.id, req.user.id],
      );
      if (result.rows.length > 0) {
        res.json({ message: "Product deleted" });
      } else {
        res.status(404).json({ error: "Product not found or unauthorized" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Serve static files from uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// USER PROFILE & VENDOR APPLICATION ROUTES
app.get("/api/user/profile", authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id, username, email, role, created_at FROM users WHERE id = $1",
      [req.user.id],
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/api/user/profile", authenticateToken, async (req, res) => {
  const { username, email } = req.body;
  try {
    await db.query("UPDATE users SET username = $1, email = $2 WHERE id = $3", [
      username,
      email,
      req.user.id,
    ]);
    res.json({ message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post(
  "/api/vendor/apply",
  authenticateToken,
  upload.single("document"),
  async (req, res) => {
    const { business_name } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "Document is required" });
    }
    const document_path = `/uploads/${req.file.filename}`;

    try {
      await db.query(
        "INSERT INTO vendor_applications (user_id, business_name, document_path) VALUES ($1, $2, $3)",
        [req.user.id, business_name, document_path],
      );
      res.json({ message: "Application submitted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.get(
  "/api/vendor/application-status",
  authenticateToken,
  async (req, res) => {
    try {
      const result = await db.query(
        "SELECT status FROM vendor_applications WHERE user_id = $1 ORDER BY id DESC LIMIT 1",
        [req.user.id],
      );
      res.json(result.rows[0] || { status: "none" });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// ADMIN ROUTES
app.get(
  "/api/admin/users",
  authenticateToken,
  requireRole("admin"),
  async (req, res) => {
    try {
      const result = await db.query(
        "SELECT id, username, email, role, created_at FROM users ORDER BY id ASC",
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.get(
  "/api/admin/products",
  authenticateToken,
  requireRole("admin"),
  async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM products ORDER BY id DESC");
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.get(
  "/api/admin/orders",
  authenticateToken,
  requireRole("admin"),
  async (req, res) => {
    try {
      const result = await db.query(`
      SELECT o.*, u.username as customer_name 
      FROM orders o
      JOIN users u ON o.customer_id = u.id
      ORDER BY o.created_at DESC
    `);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// ==========================================
// VENDOR TRACKING ROUTES
// ==========================================
app.get(
  "/api/vendor/orders",
  authenticateToken,
  requireRole("vendor"),
  async (req, res) => {
    try {
      const result = await db.query(
        `
      SELECT oi.*, p.name as product_name, o.created_at, u.username as customer_name
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      JOIN orders o ON oi.order_id = o.id
      JOIN users u ON o.customer_id = u.id
      WHERE oi.vendor_id = $1
      ORDER BY oi.created_at DESC
    `,
        [req.user.id],
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

app.get(
  "/api/vendor/earnings",
  authenticateToken,
  requireRole("vendor"),
  async (req, res) => {
    try {
      const result = await db.query(
        `
      SELECT SUM(price * quantity) as total_earnings, COUNT(id) as total_items_sold
      FROM order_items
      WHERE vendor_id = $1 AND status != 'cancelled'
    `,
        [req.user.id],
      );
      res.json(result.rows[0] || { total_earnings: 0, total_items_sold: 0 });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

// ==========================================
// CUSTOMER E-COMMERCE ROUTES
// ==========================================
app.post("/api/cart", authenticateToken, async (req, res) => {
  const { product_id, quantity } = req.body;
  try {
    // Check if item already exists in cart
    const existing = await db.query(
      "SELECT id FROM cart_items WHERE customer_id = $1 AND product_id = $2",
      [req.user.id, product_id],
    );
    if (existing.rows.length > 0) {
      // Update quantity
      await db.query(
        "UPDATE cart_items SET quantity = quantity + $1 WHERE id = $2",
        [quantity || 1, existing.rows[0].id],
      );
    } else {
      // Insert new
      await db.query(
        "INSERT INTO cart_items (customer_id, product_id, quantity) VALUES ($1, $2, $3)",
        [req.user.id, product_id, quantity || 1],
      );
    }
    res.json({ message: "Added to cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/cart", authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT c.id, c.quantity, p.name, p.price, p.img, p.id as product_id
      FROM cart_items c
      JOIN products p ON c.product_id = p.id
      WHERE c.customer_id = $1
    `,
      [req.user.id],
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mock checkout route
app.post("/api/orders", authenticateToken, async (req, res) => {
  try {
    // 1. Get user cart
    const cart = await db.query(
      `
      SELECT c.quantity, p.id as product_id, p.price, p.vendor_id
      FROM cart_items c
      JOIN products p ON c.product_id = p.id
      WHERE c.customer_id = $1
    `,
      [req.user.id],
    );

    if (cart.rows.length === 0)
      return res.status(400).json({ error: "Cart is empty" });

    // Calculate total
    let total = 0;
    cart.rows.forEach((item) => {
      // Handle the "₹45" format string issue by parsing numbers only
      const priceNum = parseFloat(item.price.replace(/[^\\d.]/g, "")) || 0;
      total += priceNum * item.quantity;
    });

    // 2. Create Order
    const orderResult = await db.query(
      "INSERT INTO orders (customer_id, total_amount) VALUES ($1, $2) RETURNING id",
      [req.user.id, total],
    );
    const orderId = orderResult.rows[0].id;

    // 3. Create Order Items
    for (let item of cart.rows) {
      const priceNum = parseFloat(item.price.replace(/[^\\d.]/g, "")) || 0;
      await db.query(
        "INSERT INTO order_items (order_id, product_id, vendor_id, quantity, price) VALUES ($1, $2, $3, $4, $5)",
        [orderId, item.product_id, item.vendor_id, item.quantity, priceNum],
      );
    }

    // 4. Clear cart
    await db.query("DELETE FROM cart_items WHERE customer_id = $1", [
      req.user.id,
    ]);

    res.json({ message: "Checkout successful", orderId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
