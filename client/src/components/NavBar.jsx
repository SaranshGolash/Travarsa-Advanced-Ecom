import React, { useState } from "react";
import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoggedInNavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const inputStyle = {
    padding: showSearch ? "8px 16px" : "0px",
    borderRadius: "20px",
    border: showSearch ? "1px solid #D4AE73" : "none",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#FFFFFF",
    outline: "none",
    width: showSearch ? "200px" : "0px",
    opacity: showSearch ? 1 : 0,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: `'Kurale', serif`,
    pointerEvents: showSearch ? "auto" : "none",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s ease-in-out",
    padding: 0,
  };

  return (
    <div className="loggedInNavBar" style={containerStyle}>
      <div className="auth">
        <button
          type="button"
          style={{
            ...buttonStyle,
            fontSize: "16px",
            fontFamily: "Kurale",
            fontWeight: "500",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AE73")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          onClick={() => navigate("/auth")}
        >
          Login/SignUp
        </button>
      </div>
      <input type="text" placeholder="Search..." name="q" style={inputStyle} />
      <button
        type="button"
        aria-label="search"
        onClick={() => setShowSearch(!showSearch)}
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AE73")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
      >
        <FaSearch />
      </button>
      <button
        type="button"
        aria-label="wishlist"
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AE73")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
      >
        <FaRegHeart />
      </button>
      <button
        type="button"
        aria-label="cart"
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AE73")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
      >
        <FaShoppingCart />
      </button>
    </div>
  );
}

function NavBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const navbarMain = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    height: "80px",
    background: "rgba(19, 19, 18, 0.85)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  };

  const navBarContents = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    listStyleType: "none",
    fontFamily: `'Kurale', serif`,
    fontWeight: "400",
    margin: 0,
    padding: 0,
  };

  const navItems = [
    "Home",
    "About",
    "Men",
    "Women",
    "Kids",
    "New Arrivals",
    "Sale",
    "Support",
  ];

  return (
    <div className="navbar-main" style={navbarMain}>
      <div
        className="navbar-image"
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img
          src="/images/brand_name.png"
          alt="Styvora"
          style={{ height: "40px" }}
        />
      </div>
      <div className="navbar-contents">
        <ul style={navBarContents}>
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (item === "Home") navigate("/");
                else if (item === "About") navigate("/about");
                else if (item === "Support") navigate("/support");
                else if (item === "Login/SignUp") navigate("/auth");
                else navigate(`/products/${item.toLowerCase().replace(" ", "-")}`);
              }}
              style={{
                color: hoveredIndex === index ? "#D4AE73" : "#FFFFFF",
                cursor: "pointer",
                transition: "color 0.2s ease-in-out",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <LoggedInNavBar />
    </div>
  );
}

export default NavBar;
