import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';

function AdminDashboard() {
  const { token, user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("http://localhost:5000/api/admin/users", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const productRes = await fetch("http://localhost:5000/api/admin/products", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const orderRes = await fetch("http://localhost:5000/api/admin/orders", {
          headers: { "Authorization": `Bearer ${token}` }
        });

        if (userRes.ok) setUsers(await userRes.json());
        if (productRes.ok) setProducts(await productRes.json());
        if (orderRes.ok) setOrders(await orderRes.json());
      } catch (err) {
        setError("Error connecting to server");
      }
    };
    fetchData();
  }, [token]);

  const dashboardStyle = {
    backgroundColor: "#131312",
    minHeight: "100vh",
    color: "#FFFFFF",
    fontFamily: "'Kurale', serif",
    padding: "40px 10%",
  };

  const headerStyle = {
    color: "#E2C08A",
    fontSize: "50px",
    fontFamily: "'League Spartan', sans-serif",
    textShadow: "0 0 10px rgba(226, 192, 138, 0.7)",
    marginBottom: "40px"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "50px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    overflow: "hidden"
  };

  const thStyle = {
    padding: "15px",
    textAlign: "left",
    borderBottom: "1px solid rgba(212, 174, 115, 0.3)",
    color: "#D4AE73",
    fontFamily: "'League Spartan', sans-serif",
    fontSize: "20px"
  };

  const tdStyle = {
    padding: "15px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  };
  
  // Calculate total platform revenue
  const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.total_amount), 0);

  return (
    <>
      <NavBar />
      <div style={dashboardStyle}>
        <h1 style={headerStyle}>Admin Dashboard</h1>
        <p style={{ fontSize: "20px", color: "#F4F4F2", opacity: 0.8, marginBottom: "40px" }}>
          Welcome back, {user?.username}. Here is a global overview of the platform.
        </p>

        {error && <p style={{ color: "#e74c3c" }}>{error}</p>}
        
        <div style={{ background: "rgba(212, 174, 115, 0.1)", border: "1px solid rgba(212, 174, 115, 0.3)", borderRadius: "15px", padding: "20px", textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ margin: "0 0 10px 0", color: "#D4AE73" }}>Total Platform Revenue</h3>
            <p style={{ fontSize: "35px", margin: 0, fontWeight: "bold", fontFamily: "'League Spartan', sans-serif" }}>
              ₹{totalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </p>
        </div>

        <h2 style={{ ...headerStyle, fontSize: "35px" }}>Recent Orders</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Order ID</th>
              <th style={thStyle}>Customer</th>
              <th style={thStyle}>Total Amount</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td style={tdStyle}>#{o.id}</td>
                <td style={tdStyle}>{o.customer_name}</td>
                <td style={tdStyle}>₹{parseFloat(o.total_amount).toFixed(2)}</td>
                <td style={tdStyle}>
                  <span style={{ color: o.status === 'pending' ? '#f39c12' : '#2ecc71', fontWeight: 'bold' }}>
                    {o.status.toUpperCase()}
                  </span>
                </td>
                <td style={tdStyle}>{new Date(o.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ ...headerStyle, fontSize: "35px" }}>All Users</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Username</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td style={tdStyle}>{u.id}</td>
                <td style={tdStyle}>{u.username}</td>
                <td style={tdStyle}>{u.email}</td>
                <td style={tdStyle}>
                  <span style={{
                    background: u.role === 'admin' ? '#e74c3c' : u.role === 'vendor' ? '#f39c12' : '#3498db',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {u.role.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ ...headerStyle, fontSize: "35px" }}>All Products</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Vendor ID</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td style={tdStyle}>{p.id}</td>
                <td style={tdStyle}>{p.name}</td>
                <td style={tdStyle}>{p.price}</td>
                <td style={tdStyle}>{p.category}</td>
                <td style={tdStyle}>{p.vendor_id || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;
