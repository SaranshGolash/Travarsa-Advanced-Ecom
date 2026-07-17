import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  const aboutMainStyle = {
    backgroundImage: `url('/images/backgroundAboutUS.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <NavBar />
      <div className="about-main" style={aboutMainStyle}>
        <AboutSection img={"/images/book.png"} />
      </div>
      <Footer />
    </>
  );
}

function AboutSection({ img }) {
  const aboutSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "row nowrap",
    gap: "40px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "20px",
  };

  const imageTextStyle = {
    color: "#E2C08A",
    fontSize: "80px",
    fontFamily: "Bebas Neue",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
  };

  return (
    <div className="aboutSection" style={{ ...aboutSectionStyle }}>
      <div className="content" style={containerStyle}></div>
      <div
        className="imageContainer"
        style={{
          ...containerStyle,
          background:
            "linear-gradient(135deg, #1C1A15 0%, rgba(226, 192, 138, 0.15) 100%)",
          width: "400px",
          height: "350px",
          marginRight: "120px",
          marginTop: "80px",
        }}
      >
        <img src={img} alt="" style={{ width: "100px", height: "100px" }} />
        <span style={imageTextStyle}>Our Story</span>
        <span
          style={{
            ...imageTextStyle,
            fontFamily: "raleway",
            fontSize: "22px",
            color: "#F4F4F2",
          }}
        >
          Fashion that moves with you
        </span>
      </div>
    </div>
  );
}

export default About;
