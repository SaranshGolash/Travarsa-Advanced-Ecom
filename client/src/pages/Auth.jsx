import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

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
    background: "linear-gradient(135deg, rgba(28, 26, 21, 0.9) 0%, rgba(28, 26, 21, 0.6) 100%)",
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
            <h2 style={{ 
              color: "#D4AE73", 
              fontFamily: "League Spartan", 
              fontSize: "40px", 
              margin: "0 0 10px 0",
              fontWeight: 600
            }}>
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p style={{ 
              color: "#F4F4F2", 
              fontFamily: "monserat", 
              opacity: 0.8, 
              margin: 0,
              fontSize: "15px",
              lineHeight: "1.5"
            }}>
              {isLogin 
                ? "Enter your details to access your premium account." 
                : "Join us and discover exclusive collections."}
            </p>
          </div>

          {/* Social Logins */}
          <div style={{ display: "flex", gap: "15px" }}>
            <SocialButton icon={<FaGoogle />} text="Google" />
            <SocialButton icon={<FaApple />} text="Apple" />
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(212, 174, 115, 0.2)" }}></div>
            <span style={{ color: "#F4F4F2", fontFamily: "monserat", fontSize: "13px", opacity: 0.5, textTransform: "uppercase", letterSpacing: "1px" }}>or continue with email</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(212, 174, 115, 0.2)" }}></div>
          </div>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {!isLogin && (
              <InputField icon={<FaUser />} type="text" placeholder="Full Name" />
            )}
            <InputField icon={<FaEnvelope />} type="email" placeholder="Email Address" />
            <InputField icon={<FaLock />} type="password" placeholder="Password" />
            
            {isLogin && (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "-5px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F4F4F2", fontFamily: "monserat", fontSize: "14px", cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#D4AE73", cursor: "pointer", width: "16px", height: "16px" }} />
                  <span style={{ opacity: 0.8 }}>Remember me</span>
                </label>
                <span style={{ color: "#D4AE73", fontFamily: "monserat", fontSize: "14px", cursor: "pointer", transition: "opacity 0.3s" }} 
                      onMouseEnter={(e) => e.target.style.opacity = 0.8}
                      onMouseLeave={(e) => e.target.style.opacity = 1}>
                  Forgot Password?
                </span>
              </div>
            )}

            <button
              type="button"
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
                boxShadow: "0 5px 15px rgba(212, 174, 115, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(212, 174, 115, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(212, 174, 115, 0.2)";
              }}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle */}
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            <span style={{ color: "#F4F4F2", fontFamily: "monserat", fontSize: "15px", opacity: 0.8 }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <span 
              onClick={() => setIsLogin(!isLogin)}
              style={{ 
                color: "#D4AE73", 
                fontFamily: "monserat", 
                fontSize: "15px", 
                fontWeight: "bold",
                cursor: "pointer",
                transition: "opacity 0.3s"
              }}
              onMouseEnter={(e) => e.target.style.opacity = 0.7}
              onMouseLeave={(e) => e.target.style.opacity = 1}
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

function InputField({ icon, type, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      background: "rgba(28, 26, 21, 0.6)",
      border: `1px solid ${isFocused ? "#D4AE73" : "rgba(212, 174, 115, 0.2)"}`,
      borderRadius: "14px",
      padding: "0 20px",
      transition: "all 0.3s ease",
      boxShadow: isFocused ? "0 0 10px rgba(212, 174, 115, 0.1)" : "none"
    }}>
      <div style={{ color: isFocused ? "#D4AE73" : "rgba(244, 244, 242, 0.4)", fontSize: "18px", transition: "color 0.3s ease", marginTop: "4px" }}>
        {icon}
      </div>
      <input
        type={type}
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

function SocialButton({ icon, text }) {
  return (
    <button
      type="button"
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
