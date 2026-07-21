import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      const userInfo = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        },
      );
      const profile = await userInfo.json();

      const response = await fetch(`http://localhost:5000/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          credential: tokenResponse.access_token,
          profile,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        login(data.user, data.token);
        if (data.user.role === "admin") navigate("/admin");
        else if (data.user.role === "vendor") navigate("/vendor");
        else navigate("/");
      } else {
        setError(data.error || "Google login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to Google.");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: () => setError("Google Login Failed"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Quick validation
    if (!isLogin && !formData.username) return setError("Username is required");
    if (!formData.email || !formData.password)
      return setError("Email and Password are required");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        if (data.user.role === "admin") navigate("/admin");
        else if (data.user.role === "vendor") navigate("/vendor");
        else navigate("/");
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (err) {
      setError("Failed to connect to server. Is it running?");
    }
  };

  const authPageStyle = {
    background: `url('/images/backgroundAboutUS1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "140px 20px 80px 20px",
  };

  const formContainerStyle = {
    background:
      "linear-gradient(135deg, rgba(28, 26, 21, 0.9) 0%, rgba(28, 26, 21, 0.6) 100%)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(212, 174, 115, 0.2)",
    borderRadius: "24px",
    padding: "50px",
    width: "100%",
    maxWidth: "480px",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  return (
    <>
      <NavBar />
      <div style={authPageStyle}>
        <div style={formContainerStyle}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "5px" }}>
            <h2
              style={{
                color: "#D4AE73",
                fontFamily: "League Spartan",
                fontSize: "40px",
                margin: "0 0 10px 0",
                fontWeight: 600,
              }}
            >
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p
              style={{
                color: "#F4F4F2",
                fontFamily: "monserat",
                opacity: 0.8,
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              {isLogin
                ? "Enter your details to access your premium account."
                : "Join us and discover exclusive collections."}
            </p>
          </div>

          {/* Social Logins */}
          <div style={{ display: "flex", gap: "15px" }}>
            <SocialButton
              icon={<FaGoogle />}
              text="Google"
              onClick={() => googleLogin()}
            />
            <SocialButton icon={<FaApple />} text="Apple" onClick={() => {}} />
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(212, 174, 115, 0.2)",
              }}
            ></div>
            <span
              style={{
                color: "#F4F4F2",
                fontFamily: "monserat",
                fontSize: "13px",
                opacity: 0.5,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              or continue with email
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(212, 174, 115, 0.2)",
              }}
            ></div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {error && (
              <div
                style={{
                  background: "rgba(231, 76, 60, 0.2)",
                  border: "1px solid #e74c3c",
                  color: "#e74c3c",
                  padding: "10px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            {!isLogin && (
              <>
                <InputField
                  icon={<FaUser />}
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                />

                <div style={{ display: "flex", gap: "15px", margin: "5px 0" }}>
                  <label
                    style={{
                      color: "#F4F4F2",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      checked={formData.role === "customer"}
                      onChange={handleChange}
                      style={{ accentColor: "#D4AE73" }}
                    />
                    Customer
                  </label>
                  <label
                    style={{
                      color: "#F4F4F2",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="vendor"
                      checked={formData.role === "vendor"}
                      onChange={handleChange}
                      style={{ accentColor: "#D4AE73" }}
                    />
                    Vendor
                  </label>
                </div>
              </>
            )}

            <InputField
              icon={<FaEnvelope />}
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
            />
            <InputField
              icon={<FaLock />}
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />

            {isLogin && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "-5px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#F4F4F2",
                    fontFamily: "monserat",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      accentColor: "#D4AE73",
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span style={{ opacity: 0.8 }}>Remember me</span>
                </label>
                <span
                  style={{
                    color: "#D4AE73",
                    fontFamily: "monserat",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                  onMouseLeave={(e) => (e.target.style.opacity = 1)}
                >
                  Forgot Password?
                </span>
              </div>
            )}

            <button
              type="submit"
              style={{
                background: "#D4AE73",
                color: "#1C1A15",
                border: "none",
                borderRadius: "14px",
                padding: "18px",
                fontFamily: "League Spartan",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
                transition: "all 0.3s ease",
                boxShadow: "0 5px 15px rgba(212, 174, 115, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(212, 174, 115, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(212, 174, 115, 0.2)";
              }}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle */}
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            <span
              style={{
                color: "#F4F4F2",
                fontFamily: "monserat",
                fontSize: "15px",
                opacity: 0.8,
              }}
            >
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              style={{
                color: "#D4AE73",
                fontFamily: "monserat",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 0.7)}
              onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function InputField({ icon, type, placeholder, name, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "rgba(28, 26, 21, 0.6)",
        border: `1px solid ${isFocused ? "#D4AE73" : "rgba(212, 174, 115, 0.2)"}`,
        borderRadius: "14px",
        padding: "0 20px",
        transition: "all 0.3s ease",
        boxShadow: isFocused ? "0 0 10px rgba(212, 174, 115, 0.1)" : "none",
      }}
    >
      <div
        style={{
          color: isFocused ? "#D4AE73" : "rgba(244, 244, 242, 0.4)",
          fontSize: "18px",
          transition: "color 0.3s ease",
          marginTop: "4px",
        }}
      >
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 15px",
          color: "#F4F4F2",
          fontFamily: "monserat",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}

function SocialButton({ icon, text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        background: "rgba(28, 26, 21, 0.4)",
        border: "1px solid rgba(212, 174, 115, 0.2)",
        borderRadius: "14px",
        padding: "15px",
        color: "#F4F4F2",
        fontFamily: "monserat",
        fontSize: "16px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(212, 174, 115, 0.1)";
        e.currentTarget.style.borderColor = "rgba(212, 174, 115, 0.5)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(28, 26, 21, 0.4)";
        e.currentTarget.style.borderColor = "rgba(212, 174, 115, 0.2)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: "20px", marginTop: "2px" }}>{icon}</span>
      {text}
    </button>
  );
}

export default Auth;
