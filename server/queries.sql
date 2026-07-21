-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    img VARCHAR(255) NOT NULL,
    rating DECIMAL(3, 1) DEFAULT 0,
    tag VARCHAR(50),
    vendor_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data for products (matching the dummy data from frontend)
INSERT INTO products (name, price, category, img, rating, tag) VALUES
('Highlander Men Shirt', '₹45', 'men', '/images/highlanderMenShirt.jpg', 4.5, NULL),
('Bear House Men T-Shirt', '₹30', 'men', '/images/BearHouseMenTShirt.jpg', 4.2, NULL),
('Terminator Running Shoes', '₹85', 'men', '/images/MenTerminatorRunningShoes.jpg', 4.8, NULL),
('Puma Court Shatter Sneakers', '₹95', 'men', '/images/PumaMensCourtShatterLowSneakers.jpg', 4.7, NULL),
('High Waist Jeans', '₹55', 'women', '/images/HighWaistJeansForWomen.jpg', 4.6, NULL),
('Silk Embroidery Anarkali', '₹120', 'women', '/images/MOKOSHWomensSilkEmbroideryAnarkali.jpg', 4.9, NULL),
('Tokyo Talkies Tops', '₹25', 'women', '/images/TokyoTalkiesTops.jpg', 4.1, NULL),
('Kids Hooded Sweatshirt', '₹35', 'kids', '/images/KidsHoodedSweatshirt.jpg', 4.4, NULL),
('Full Sleeves Boys Hoodies', '₹40', 'kids', '/images/FullSleevesBoysHoodies.jpg', 4.3, NULL),
('Lymio Polo T-Shirt', '₹25', 'men', '/images/LymioPoloTshirtForMen.jpg', 4.0, 'sale'),
('Women Casual Trousers', '₹60', 'women', '/images/Marks&SpencerWomenCasualTrousers.jpg', 4.5, 'new-arrivals'),
('London Hills Printed T-Shirt', '₹20', 'women', '/images/LondonHillsWomenCottonPrintedTShirt.jpg', 4.2, 'sale'),
('Nobero Joggers', '₹50', 'men', '/images/NoberoJoggersForMen.jpg', 4.3, 'new-arrivals'),
('Cotton Baggy Trackpants', '₹40', 'men', '/images/MensCottonBaggyTrackpants.jpg', 4.1, NULL);

-- Create orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create order_items table (Links product, vendor, and order)
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id),
    vendor_id INT REFERENCES users(id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'processing',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create cart_items table
CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create wishlist_items table
CREATE TABLE wishlist_items (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
