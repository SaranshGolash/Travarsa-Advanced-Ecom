import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaFilter, FaStar, FaShoppingCart } from "react-icons/fa";

const allProducts = [
  {
    id: 1,
    name: "Highlander Men Shirt",
    price: "₹45",
    category: "men",
    img: "/images/highlanderMenShirt.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bear House Men T-Shirt",
    price: "₹30",
    category: "men",
    img: "/images/BearHouseMenTShirt.jpg",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Terminator Running Shoes",
    price: "₹85",
    category: "men",
    img: "/images/MenTerminatorRunningShoes.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Puma Court Shatter Sneakers",
    price: "₹95",
    category: "men",
    img: "/images/PumaMensCourtShatterLowSneakers.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "High Waist Jeans",
    price: "₹55",
    category: "women",
    img: "/images/HighWaistJeansForWomen.jpg",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Silk Embroidery Anarkali",
    price: "₹120",
    category: "women",
    img: "/images/MOKOSHWomensSilkEmbroideryAnarkali.jpg",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Tokyo Talkies Tops",
    price: "₹25",
    category: "women",
    img: "/images/TokyoTalkiesTops.jpg",
    rating: 4.1,
  },
  {
    id: 8,
    name: "Kids Hooded Sweatshirt",
    price: "₹35",
    category: "kids",
    img: "/images/KidsHoodedSweatshirt.jpg",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Full Sleeves Boys Hoodies",
    price: "₹40",
    category: "kids",
    img: "/images/FullSleevesBoysHoodies.jpg",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Lymio Polo T-Shirt",
    price: "₹25",
    category: "men",
    img: "/images/LymioPoloTshirtForMen.jpg",
    rating: 4.0,
    tag: "sale",
  },
  {
    id: 11,
    name: "Women Casual Trousers",
    price: "₹60",
    category: "women",
    img: "/images/Marks&SpencerWomenCasualTrousers.jpg",
    rating: 4.5,
    tag: "new-arrivals",
  },
  {
    id: 12,
    name: "London Hills Printed T-Shirt",
    price: "₹20",
    category: "women",
    img: "/images/LondonHillsWomenCottonPrintedTShirt.jpg",
    rating: 4.2,
    tag: "sale",
  },
  {
    id: 13,
    name: "Nobero Joggers",
    price: "₹50",
    category: "men",
    img: "/images/NoberoJoggersForMen.jpg",
    rating: 4.3,
    tag: "new-arrivals",
  },
  {
    id: 14,
    name: "Cotton Baggy Trackpants",
    price: "₹40",
    category: "men",
    img: "/images/MensCottonBaggyTrackpants.jpg",
    rating: 4.1,
  },
];

function FilterProducts() {
  const { category } = useParams();

  const currentCategory = category || "all";

  const [priceRange, setPriceRange] = useState(150);
  const [selectedSize, setSelectedSize] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Filter logic
  let filtered = allProducts.filter((p) => {
    if (currentCategory === "new-arrivals") return p.tag === "new-arrivals";
    if (currentCategory === "sale") return p.tag === "sale";
    if (currentCategory !== "all") return p.category === currentCategory;
    return true;
  });

  filtered = filtered.filter(
    (p) => parseFloat(p.price.replace(/[^\d.]/g, "")) <= priceRange,
  );

  if (sortBy === "price-low") {
    filtered.sort(
      (a, b) =>
        parseFloat(a.price.replace(/[^\d.]/g, "")) -
        parseFloat(b.price.replace(/[^\d.]/g, "")),
    );
  } else if (sortBy === "price-high") {
    filtered.sort(
      (a, b) =>
        parseFloat(b.price.replace(/[^\d.]/g, "")) -
        parseFloat(a.price.replace(/[^\d.]/g, "")),
    );
  } else {
    // popular - sort by rating
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Styles
  const pageStyle = {
    backgroundColor: "#131312",
    minHeight: "100vh",
    color: "#FFFFFF",
    fontFamily: "'Kurale', serif",
  };

  const heroStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 10%",
    background:
      "linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(30,30,28,1) 100%)",
    borderBottom: "1px solid rgba(212, 174, 115, 0.2)",
  };

  const heroTextStyle = {
    flex: 1,
    fontFamily: "raleway",
  };

  const heroHeading = {
    color: "#E2C08A",
    fontSize: "80px",
    fontFamily: "'League Spartan', sans-serif",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.3)",
    margin: 0,
    textTransform: "capitalize",
  };

  const heroSubtext = {
    fontSize: "20px",
    color: "#F4F4F2",
    marginTop: "20px",
    opacity: 0.8,
  };

  const heroImageContainer = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const getHeroContent = () => {
    switch (currentCategory) {
      case "men":
        return {
          title: "Men's Collection",
          img: "/images/highlanderMenShirt.jpg",
          sub: "Elevate your style with our premium men's footwear and apparel.",
        };
      case "women":
        return {
          title: "Women's Collection",
          img: "/images/MOKOSHWomensSilkEmbroideryAnarkali.jpg",
          sub: "Discover elegance and comfort in every piece.",
        };
      case "kids":
        return {
          title: "Kids' Collection",
          img: "/images/KidsHoodedSweatshirt.jpg",
          sub: "Fun, vibrant, and comfortable wear for the little ones.",
        };
      case "new-arrivals":
        return {
          title: "New Arrivals",
          img: "/images/PumaMensCourtShatterLowSneakers.jpg",
          sub: "Be the first to wear our latest premium designs.",
        };
      case "sale":
        return {
          title: "Flash Sale",
          img: "/images/LymioPoloTshirtForMen.jpg",
          sub: "Incredible deals on premium quality apparel.",
        };
      default:
        return {
          title: "Our Collection",
          img: "/images/PumaMensCourtShatterLowSneakers.jpg",
          sub: "Explore our wide range of premium apparel.",
        };
    }
  };

  const heroContent = getHeroContent();

  const mainLayout = {
    display: "flex",
    padding: "40px 5%",
    gap: "40px",
    flexWrap: "wrap",
  };

  const sidebarStyle = {
    width: "300px",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "20px",
    border: "1px solid rgba(212, 174, 115, 0.1)",
    height: "max-content",
    position: "sticky",
    top: "100px",
  };

  const filterSectionTitle = {
    color: "#D4AE73",
    fontSize: "28px",
    marginBottom: "30px",
    fontFamily: "kurale",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textShadow: "0 0 10px rgba(212, 174, 115, 0.5)",
  };

  const productGrid = {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "40px",
    minWidth: "300px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    borderRadius: "20px",
    padding: "20px",
    transition:
      "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease",
    border: "1px solid rgba(255,255,255,0.05)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    position: "relative",
    overflow: "hidden",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(212, 174, 115, 0.15)";
    e.currentTarget.style.borderColor = "rgba(212, 174, 115, 0.4)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
  };

  return (
    <div style={pageStyle}>
      <NavBar />

      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={heroTextStyle}>
          <h1 style={heroHeading}>{heroContent.title}</h1>
          <p style={heroSubtext}>{heroContent.sub}</p>
        </div>
        <div style={heroImageContainer}>
          <img
            src={heroContent.img}
            alt={heroContent.title}
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              boxShadow:
                "0 0 50px rgba(226, 192, 138, 0.3), inset 0 0 20px rgba(0,0,0,0.5)",
              border: "6px solid #D4AE73",
            }}
          />
        </div>
      </div>

      {/* Main Layout */}
      <div style={mainLayout}>
        {/* Sidebar Filters */}
        <div style={sidebarStyle}>
          <h2 style={filterSectionTitle}>
            <FaFilter /> Filters
          </h2>

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "15px",
                color: "#E2C08A",
                fontSize: "18px",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              Max Price: ${priceRange}
            </label>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{
                width: "100%",
                accentColor: "#D4AE73",
                cursor: "pointer",
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "15px",
                color: "#E2C08A",
                fontSize: "18px",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                background: "rgba(0,0,0,0.5)",
                color: "#FFF",
                border: "1px solid rgba(212, 174, 115, 0.4)",
                borderRadius: "10px",
                fontFamily: "'Kurale', serif",
                fontSize: "16px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "15px",
                color: "#E2C08A",
                fontSize: "18px",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              Size
            </label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["S", "M", "L", "XL", "XXL", "7", "8", "9", "10"].map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(selectedSize === size ? "" : size)
                  }
                  style={{
                    padding: "8px 15px",
                    background:
                      selectedSize === size
                        ? "#D4AE73"
                        : "rgba(255,255,255,0.05)",
                    color: selectedSize === size ? "#131312" : "#F4F4F2",
                    border:
                      selectedSize === size
                        ? "1px solid #D4AE73"
                        : "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "16px",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSize !== size) {
                      e.currentTarget.style.borderColor = "#D4AE73";
                      e.currentTarget.style.color = "#D4AE73";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSize !== size) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#F4F4F2";
                    }
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div style={productGrid}>
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {product.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background:
                        product.tag === "sale"
                          ? "linear-gradient(45deg, #ff416c, #ff4b2b)"
                          : "linear-gradient(45deg, #11998e, #38ef7d)",
                      color: "#FFF",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      zIndex: 2,
                      textTransform: "uppercase",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                      fontFamily: "'League Spartan', sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    {product.tag.replace("-", " ")}
                  </span>
                )}
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    background: "#000",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.15)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "22px",
                      color: "#F4F4F2",
                      fontFamily: "'League Spartan', sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {product.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "26px",
                        color: "#D4AE73",
                        fontFamily: "kurale",
                      }}
                    >
                      {product.price}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#f1c40f",
                        fontSize: "16px",
                      }}
                    >
                      <FaStar /> {product.rating}
                    </span>
                  </div>
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: "transparent",
                    color: "#D4AE73",
                    border: "1px solid #D4AE73",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontFamily: "kurale",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                    marginTop: "auto",
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
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "100px 0",
              }}
            >
              <h2
                style={{
                  color: "#D4AE73",
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "40px",
                }}
              >
                No products found in this category.
              </h2>
              <p style={{ color: "#F4F4F2", fontSize: "18px", opacity: 0.8 }}>
                Try adjusting your filters or search criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FilterProducts;
