import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegComments, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";

function Support() {
  const supportStyle = {
    background: `url('/images/backgroundAboutUS1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    maxWidth: "100%",
  };

  return (
    <>
      <NavBar />
      <div className="supportMain" style={supportStyle}>
        <SupportSection />
      </div>
      <Footer />
    </>
  );
}

function SupportSection() {
  const supportSectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexFlow: "column nowrap",
    gap: "30px",
  };

  const articleSearchStyle = {
    position: "absolute",
    top: "160px",
    right: "120px",
    width: "850px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const articleBoxStyle = {
    background:
      "linear-gradient(135deg, rgba(28, 26, 21, 0.9) 0%, rgba(28, 26, 21, 0.5) 100%)",
    border: "1px solid rgba(212, 174, 115, 0.2)",
    borderRadius: "20px",
    padding: "30px",
    backdropFilter: "blur(15px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: "850px",
  };

  const articlesStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "row wrap",
    gap: "20px",
  };

  const articles = [
    "KYC updates for foreign Shipment",
    "Changes in the return policy",
    "International shipping rates updated",
    "New Payment Methods added",
    "New Brands/Vendors partnered with",
    "Updated Terms & Conditions",
  ];

  return (
    <>
      <div className="responseTime" style={supportSectionStyle}>
        <span
          style={{
            color: "#F4F4F2",
            border: "1px solid #D4AE73",
            borderRadius: "50px",
            padding: "10px 20px",
            fontSize: "16px",
            fontFamily: "monserat",
            marginTop: "70px",
            marginLeft: "120px",
            background:
              "linear-gradient(135deg, rgba(226, 192, 138, 0.5) 0%, rgba(28, 26, 21, 0) 100%)",
          }}
        >
          &#128336; Avg. response time: 3 hrs 48 mins
        </span>
      </div>
      <div
        className="supportContext"
        style={{
          ...supportSectionStyle,
          marginTop: "70px",
          marginLeft: "120px",
          fontSize: "70px",
          gap: "0px",
          fontFamily: "League Spartan",
          textShadow:
            "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
        }}
      >
        <span style={{ color: "#D4AE73" }}>How can we</span>
        <span style={{ color: "#F4F4F2", marginTop: "-30px" }}>
          help you
          <span style={{ color: "#D4AE73" }}> today?</span>
        </span>
        <span
          style={{
            color: "#F4F4F2",
            fontFamily: "kurale",
            fontSize: "28px",
            width: "500px",
            marginLeft: "-30px",
            textShadow:
              "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
          }}
        >
          Questions in your mind? Connect
          <br />
          with our experts to get personalized assistance.
        </span>
      </div>
      <ArticleBox
        articleSearchStyle={articleSearchStyle}
        articleBoxStyle={articleBoxStyle}
        articlesStyle={articlesStyle}
        articles={articles}
      />
      <SupportBox />
      <FAQs />
    </>
  );
}

function ArticleBox({
  articleSearchStyle,
  articleBoxStyle,
  articlesStyle,
  articles,
}) {
  return (
    <div className="articleSearch" style={articleSearchStyle}>
      <div
        className="searchBar"
        style={{
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search our help center..."
          style={{
            width: "100%",
            padding: "20px 25px",
            paddingRight: "60px",
            borderRadius: "20px",
            border: "1px solid rgba(212, 174, 115, 0.4)",
            background: "rgba(28, 26, 21, 0.6)",
            color: "#F4F4F2",
            fontSize: "16px",
            fontFamily: "monserat",
            outline: "none",
            backdropFilter: "blur(10px)",
            transition: "border-color 0.3s ease",
            boxSizing: "border-box",
            background:
              "linear-gradient(135deg, rgba(226, 192, 138, 0.2) 0%, rgba(28, 26, 21, 0) 100%)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#D4AE73")}
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(212, 174, 115, 0.4)")
          }
        />
        <span
          style={{
            position: "absolute",
            right: "25px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "20px",
            color: "#D4AE73",
            opacity: 0.8,
          }}
        >
          <FaSearch />
        </span>
      </div>

      <div className="articleBox" style={articleBoxStyle}>
        <div className="articleHead">
          <h3
            style={{
              color: "#D4AE73",
              textShadow:
                "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
              fontFamily: "League Spartan",
              fontSize: "26px",
              margin: "0 0 15px 0",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Popular Articles
          </h3>
        </div>
        <div className="articles" style={articlesStyle}>
          {articles.map((article, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                cursor: "pointer",
                padding: "12px 15px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212, 174, 115, 0.08)";
                e.currentTarget.style.border =
                  "1px solid rgba(212, 174, 115, 0.2)";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.border = "1px solid transparent";
                e.currentTarget.style.transform = "translateX(0px)";
              }}
            >
              <div
                style={{
                  background: "rgba(212, 174, 115, 0.15)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#D4AE73",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                &#128196;
              </div>
              <span
                style={{
                  color: "#F4F4F2",
                  fontFamily: "monserat",
                  fontSize: "15px",
                  fontWeight: 400,
                  letterSpacing: "0.3px",
                }}
              >
                {article}
              </span>
              <span
                style={{
                  color: "#D4AE73",
                  marginLeft: "auto",
                  fontSize: "20px",
                  opacity: 0.7,
                }}
              >
                &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportBox() {
  const supportBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row wrap",
    gap: "40px",
    marginTop: "120px",
    marginBottom: "80px",
    padding: "0 120px",
    position: "relative",
    zIndex: 10,
  };

  return (
    <div className="supportBox" style={supportBoxStyle}>
      <SupportBoxContent
        icon={<FaRegComments />}
        title="Live Chat"
        description="Chat with our experts in real-time for quick assistance."
        buttonText="Start Chat"
      />
      <SupportBoxContent
        icon={<FaPhoneAlt />}
        title="Call Us"
        description="Speak directly to our dedicated support team."
        buttonText="View Numbers"
      />
      <SupportBoxContent
        icon={<FaEnvelope />}
        title="Email Us"
        description="Send us a detailed message and we'll reply shortly."
        buttonText="Send Email"
      />
    </div>
  );
}

function SupportBoxContent({ icon, title, description, buttonText }) {
  const supportBoxContentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "15px",
    border: "1px solid rgba(212, 174, 115, 0.2)",
    borderRadius: "20px",
    padding: "40px 30px",
    background:
      "linear-gradient(135deg, rgba(28, 26, 21, 0.9) 0%, rgba(28, 26, 21, 0.5) 100%)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: "300px",
    textAlign: "center",
    transition: "all 0.4s ease",
    boxSizing: "border-box",
  };

  const btnStyle = {
    marginTop: "15px",
    padding: "12px 30px",
    background: "transparent",
    color: "#D4AE73",
    border: "1px solid #D4AE73",
    borderRadius: "30px",
    fontFamily: "League Spartan",
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };
  return (
    <div
      className="supportBoxContent"
      style={supportBoxContentStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(212, 174, 115, 0.15)";
        e.currentTarget.style.borderColor = "rgba(212, 174, 115, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.borderColor = "rgba(212, 174, 115, 0.2)";
      }}
    >
      <div style={{ color: "#D4AE73", fontSize: "45px", marginBottom: "10px" }}>
        {icon}
      </div>
      <h3
        style={{
          color: "#F4F4F2",
          fontFamily: "League Spartan",
          fontSize: "28px",
          margin: "0",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#F4F4F2",
          fontFamily: "monserat",
          fontSize: "15px",
          opacity: 0.8,
          margin: "0",
          minHeight: "45px",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>
      <Button
        style={btnStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#D4AE73";
          e.currentTarget.style.color = "#1C1A15";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#D4AE73";
        }}
        textBtn={buttonText}
      />
    </div>
  );
}

function FAQs() {
  const faqsStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "30px",
    marginTop: "80px",
    marginBottom: "100px",
    padding: "0 120px 100px 120px",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 10,
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all unworn and unwashed items with tags attached. Please visit our returns portal to start the process.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days within the US. Expedited shipping options are available at checkout.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 100 countries worldwide. International shipping rates and times vary by location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a confirmation email with a tracking link. You can also track your order in your account dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Apple Pay. We also offer flexible payment options through Klarna and Afterpay.",
    },
  ];

  return (
    <div className="faqsMain" style={faqsStyle}>
      <h2
        style={{
          color: "#D4AE73",
          fontFamily: "League Spartan",
          fontSize: "55px",
          margin: "0 0 20px 0",
          fontWeight: "bold",
          textAlign: "center",
          textShadow:
            "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
        }}
      >
        Frequently Asked <span style={{ color: "#F4F4F2" }}>Questions</span>
      </h2>
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {faqData.map((faq, index) => (
          <Questions key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function Questions({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        border: "1px solid rgba(212, 174, 115, 0.2)",
        borderRadius: "15px",
        background:
          "linear-gradient(135deg, rgba(28, 26, 21, 0.9) 0%, rgba(28, 26, 21, 0.5) 100%)",
        backdropFilter: "blur(15px)",
        boxShadow: isOpen
          ? "0 15px 40px rgba(0, 0, 0, 0.4)"
          : "0 10px 30px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(212, 174, 115, 0.08)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        style={{
          padding: "25px 35px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        <h4
          style={{
            margin: 0,
            color: isOpen ? "#D4AE73" : "#F4F4F2",
            fontFamily: "League Spartan",
            fontSize: "22px",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
        >
          {question}
        </h4>
        <span
          style={{
            color: "#D4AE73",
            fontSize: "30px",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.4s ease",
            display: "inline-block",
            lineHeight: "1",
          }}
        >
          +
        </span>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "0 35px 30px 35px" : "0 35px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(212, 174, 115, 0) 0%, rgba(212, 174, 115, 0.3) 50%, rgba(212, 174, 115, 0) 100%)",
            marginBottom: "20px",
            width: "100%",
          }}
        ></div>
        <p
          style={{
            margin: 0,
            color: "#F4F4F2",
            fontFamily: "monserat",
            fontSize: "16px",
            lineHeight: "1.7",
            opacity: 0.85,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default Support;
