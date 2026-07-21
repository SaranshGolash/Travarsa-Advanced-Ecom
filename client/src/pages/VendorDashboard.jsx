import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

function VendorDashboard() {
  const { token, user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [earnings, setEarnings] = useState({
    total_earnings: 0,
    total_items_sold: 0,
  });
  const [error, setError] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "men",
    img: "",
    tag: "",
  });

  const fetchData = React.useCallback(async () => {
    try {
      // Fetch Products
      const prodRes = await fetch("http://localhost:5000/api/vendor/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (prodRes.ok) setProducts(await prodRes.json());

      // Fetch Earnings
      const earnRes = await fetch("http://localhost:5000/api/vendor/earnings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (earnRes.ok) setEarnings(await earnRes.json());

      // Fetch Orders
      const orderRes = await fetch("http://localhost:5000/api/vendor/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (orderRes.ok) setOrders(await orderRes.json());
    } catch (err) {
      setError("Error connecting to server");
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/vendor/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", price: "", category: "men", img: "", tag: "" });
        fetchData();
      }
    } catch (err) {
      setError("Failed to add product");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/vendor/products/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) fetchData();
    } catch (err) {
      setError("Failed to delete product");
    }
  };

  const dashboardStyle = {
    backgroundColor: "#131312",
    minHeight: "100vh",
    color: "#FFFFFF",
    fontFamily: "'Kurale', serif",
    padding: "40px 10%",
  };

  const headerStyle = {
    color: "#E2C08A",
    fontSize: "70px",
    fontFamily: "'League Spartan', sans-serif",
    textShadow: "0 0 10px rgba(226, 192, 138, 0.7)",
    marginBottom: "40px",
  };

  const inputStyle = {
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid rgba(212, 174, 115, 0.4)",
    background: "rgba(0,0,0,0.5)",
    color: "#FFF",
    fontFamily: "'Kurale', serif",
    fontSize: "16px",
    width: "100%",
    marginBottom: "15px",
  };

  const btnStyle = {
    background: "#D4AE73",
    color: "#1C1A15",
    border: "none",
    borderRadius: "10px",
    padding: "15px 30px",
    fontFamily: "'League Spartan', sans-serif",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const cardStyle = {
    background: "rgba(212, 174, 115, 0.1)",
    border: "1px solid rgba(212, 174, 115, 0.3)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    flex: 1,
  };

  return (
    <>
      <NavBar />
      <div style={dashboardStyle}>
        <h1 style={headerStyle}>Vendor Dashboard</h1>
        <p
          style={{
            fontSize: "20px",
            color: "#F4F4F2",
            opacity: 0.8,
            marginBottom: "30px",
          }}
        >
          Welcome back, {user?.username}. Manage your inventory and track sales.
        </p>

        {error && <p style={{ color: "#e74c3c" }}>{error}</p>}

        {/* Analytics Cards */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
          <div style={cardStyle}>
            <h3 style={{ margin: "0 0 10px 0", color: "#D4AE73" }}>
              Total Earnings
            </h3>
            <p
              style={{
                fontSize: "35px",
                margin: 0,
                fontWeight: "bold",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              ₹{Number(earnings.total_earnings || 0).toLocaleString()}
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ margin: "0 0 10px 0", color: "#D4AE73" }}>
              Items Sold
            </h3>
            <p
              style={{
                fontSize: "35px",
                margin: 0,
                fontWeight: "bold",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              {earnings.total_items_sold || 0}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {/* Add Product Form */}
          <div
            style={{
              flex: "1",
              background: "rgba(255,255,255,0.05)",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid rgba(212,174,115,0.2)",
              minWidth: "300px",
            }}
          >
            <h2
              style={{ ...headerStyle, fontSize: "30px", marginBottom: "20px" }}
            >
              Add New Product
            </h2>
            <form onSubmit={handleAddProduct}>
              <input
                style={inputStyle}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
              />
              <input
                style={inputStyle}
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price (e.g. ₹99)"
                required
              />
              <select
                style={inputStyle}
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
              <input
                style={inputStyle}
                name="img"
                value={formData.img}
                onChange={handleChange}
                placeholder="Image URL (e.g. /images/shoe.jpg)"
                required
              />
              <input
                style={inputStyle}
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                placeholder="Tag (e.g. sale, new-arrivals)"
              />
              <button
                type="submit"
                style={{
                  ...btnStyle,
                  background: "transparent",
                  border: "2px solid #D4AE73",
                  color: "#D4AE73",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#D4AE73";
                  e.currentTarget.style.color = "#131312";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(212, 174, 115, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#D4AE73";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Add Product
              </button>
            </form>
          </div>

          {/* Product List */}
          <div style={{ flex: "2", minWidth: "400px" }}>
            <h2
              style={{ ...headerStyle, fontSize: "40px", marginBottom: "20px" }}
            >
              Your Inventory
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "15px",
                      textAlign: "left",
                      color: "#D4AE73",
                      borderBottom: "1px solid rgba(212,174,115,0.3)",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      textAlign: "left",
                      color: "#D4AE73",
                      borderBottom: "1px solid rgba(212,174,115,0.3)",
                    }}
                  >
                    Price
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      textAlign: "left",
                      color: "#D4AE73",
                      borderBottom: "1px solid rgba(212,174,115,0.3)",
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      textAlign: "left",
                      color: "#D4AE73",
                      borderBottom: "1px solid rgba(212,174,115,0.3)",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      style={{ padding: "20px", textAlign: "center" }}
                    >
                      No products found. Start adding some!
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id}>
                      <td
                        style={{
                          padding: "15px",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {p.name}
                      </td>
                      <td
                        style={{
                          padding: "15px",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {p.price}
                      </td>
                      <td
                        style={{
                          padding: "15px",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {p.category}
                      </td>
                      <td
                        style={{
                          padding: "15px",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <button
                          onClick={() => handleDelete(p.id)}
                          style={{
                            background: "#e74c3c",
                            color: "#FFF",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Section */}
        <div style={{ marginTop: "40px" }}>
          <h2
            style={{ ...headerStyle, fontSize: "40px", marginBottom: "20px" }}
          >
            Recent Sales / Orders To Fulfill
          </h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#D4AE73",
                    borderBottom: "1px solid rgba(212,174,115,0.3)",
                  }}
                >
                  Order ID
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#D4AE73",
                    borderBottom: "1px solid rgba(212,174,115,0.3)",
                  }}
                >
                  Product
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#D4AE73",
                    borderBottom: "1px solid rgba(212,174,115,0.3)",
                  }}
                >
                  Customer
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#D4AE73",
                    borderBottom: "1px solid rgba(212,174,115,0.3)",
                  }}
                >
                  Qty x Price
                </th>
                <th
                  style={{
                    padding: "15px",
                    textAlign: "left",
                    color: "#D4AE73",
                    borderBottom: "1px solid rgba(212,174,115,0.3)",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    style={{ padding: "20px", textAlign: "center" }}
                  >
                    No sales yet.
                  </td>
                </tr>
              ) : (
                orders.map((o) => (
                  <tr key={o.id}>
                    <td
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      #{o.order_id}
                    </td>
                    <td
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {o.product_name}
                    </td>
                    <td
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {o.customer_name}
                    </td>
                    <td
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {o.quantity} x ₹{o.price}
                    </td>
                    <td
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span
                        style={{
                          color:
                            o.status === "processing" ? "#f39c12" : "#2ecc71",
                          fontWeight: "bold",
                        }}
                      >
                        {o.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VendorDashboard;
