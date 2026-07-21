import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { token, user, login } = useContext(AuthContext);
  const [profile, setProfile] = useState({ username: "", email: "" });
  const [vendorStatus, setVendorStatus] = useState("none");
  const [vendorForm, setVendorForm] = useState({
    business_name: "",
    document: null,
  });

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setProfile({ username: data.username, email: data.email });
        }
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };

    const fetchVendorStatus = async () => {
      if (user?.role === "customer") {
        try {
          const res = await fetch(
            "http://localhost:5000/api/vendor/application-status",
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (res.ok) {
            const data = await res.json();
            setVendorStatus(data.status);
          }
        } catch (err) {
          console.error("Failed to load status", err);
        }
      }
    };

    fetchProfile();
    fetchVendorStatus();
  }, [token, user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      if (res.ok) {
        setMsg("Profile updated successfully!");
        // Update context user so NavBar updates immediately
        login(
          { ...user, username: profile.username, email: profile.email },
          token,
        );
      } else {
        setError("Failed to update profile.");
      }
    } catch (err) {
      setError("Network error.");
    }
  };

  const handleVendorApply = async (e) => {
    e.preventDefault();
    setError("");
    setMsg("");

    if (!vendorForm.document) return setError("Please upload a document.");

    const formData = new FormData();
    formData.append("business_name", vendorForm.business_name);
    formData.append("document", vendorForm.document);

    try {
      const res = await fetch("http://localhost:5000/api/vendor/apply", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        setVendorStatus("pending");
        setMsg(
          "Application submitted successfully! Please wait for admin approval.",
        );
      } else {
        const errData = await res.json();
        setError(errData.error || "Failed to submit application.");
      }
    } catch (err) {
      setError("Network error while submitting.");
    }
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

  const pageStyle = {
    background: `url('/images/backgroundAboutUS1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    color: "#FFFFFF",
    fontFamily: "'Kurale', serif",
    padding: "120px 10% 40px 10%",
  };

  const sectionStyle = {
    background: "rgba(255,255,255,0.05)",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid rgba(212,174,115,0.2)",
    marginBottom: "40px",
    maxWidth: "600px",
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
    marginBottom: "20px",
    boxSizing: "border-box",
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
    width: "100%",
  };

  return (
    <>
      <NavBar />
      <div style={pageStyle}>
        <h1
          style={{
            color: "#E2C08A",
            fontSize: "70px",
            fontFamily: "'League Spartan', sans-serif",
            textShadow:
              "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
            marginBottom: "40px",
          }}
        >
          My Profile
        </h1>

        {msg && (
          <div
            style={{
              padding: "15px",
              background: "rgba(46, 204, 113, 0.2)",
              border: "1px solid #2ecc71",
              borderRadius: "10px",
              marginBottom: "20px",
              color: "#2ecc71",
            }}
          >
            {msg}
          </div>
        )}
        {error && (
          <div
            style={{
              padding: "15px",
              background: "rgba(231, 76, 60, 0.2)",
              border: "1px solid #e74c3c",
              borderRadius: "10px",
              marginBottom: "20px",
              color: "#e74c3c",
            }}
          >
            {error}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {/* Profile Settings */}
          <div style={sectionStyle}>
            <h2
              style={{
                color: "#D4AE73",
                fontSize: "30px",
                marginBottom: "20px",
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              Account Settings
            </h2>
            <form onSubmit={handleProfileUpdate}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Username
              </label>
              <input
                style={inputStyle}
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
                required
              />

              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Email
              </label>
              <input
                style={inputStyle}
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                required
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
                Save Changes
              </button>
            </form>
          </div>

          {/* Vendor Application */}
          {user?.role === "customer" && (
            <div style={sectionStyle}>
              <h2
                style={{
                  color: "#D4AE73",
                  fontSize: "30px",
                  marginBottom: "20px",
                  fontFamily: "'League Spartan', sans-serif",
                }}
              >
                Become a Vendor
              </h2>

              {vendorStatus === "pending" ? (
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    background: "rgba(243, 156, 18, 0.1)",
                    border: "1px solid #f39c12",
                    borderRadius: "10px",
                  }}
                >
                  <h3 style={{ color: "#f39c12", margin: "0 0 10px 0" }}>
                    Application Pending
                  </h3>
                  <p style={{ margin: 0, opacity: 0.8 }}>
                    Your vendor application is currently under review by our
                    admin team.
                  </p>
                </div>
              ) : vendorStatus === "approved" ? (
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    background: "rgba(46, 204, 113, 0.1)",
                    border: "1px solid #2ecc71",
                    borderRadius: "10px",
                  }}
                >
                  <h3 style={{ color: "#2ecc71", margin: "0 0 10px 0" }}>
                    Approved!
                  </h3>
                  <p style={{ margin: 0, opacity: 0.8 }}>
                    Please log out and log back in to access your Vendor
                    Dashboard.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVendorApply}>
                  <p
                    style={{
                      opacity: 0.8,
                      marginBottom: "20px",
                      lineHeight: "1.5",
                    }}
                  >
                    Start selling your premium products on Styvora. Please
                    provide your business details and upload verification
                    documents.
                  </p>

                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Business Name
                  </label>
                  <input
                    style={inputStyle}
                    value={vendorForm.business_name}
                    onChange={(e) =>
                      setVendorForm({
                        ...vendorForm,
                        business_name: e.target.value,
                      })
                    }
                    placeholder="e.g. Acme Wear"
                    required
                  />

                  <label
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Business Document (ID / License)
                  </label>
                  <input
                    type="file"
                    style={{ ...inputStyle, padding: "12px" }}
                    accept=".pdf, image/*"
                    onChange={(e) =>
                      setVendorForm({
                        ...vendorForm,
                        document: e.target.files[0],
                      })
                    }
                    required
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
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
