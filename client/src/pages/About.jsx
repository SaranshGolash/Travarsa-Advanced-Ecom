import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaLeaf, FaUsers, FaMedal, FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {
  const aboutMainStyle = {
    backgroundImage: `url('/images/backgroundAboutUS1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    maxWidth: "100%",
  };

  return (
    <>
      <NavBar />
      <div className="about-main" style={aboutMainStyle}>
        <AboutSection img={"/images/book.png"} />
        <CoreValues />
        <Timeline />
        <SocialProof />
        <CallToAction />
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
    gap: "30px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "20px",
    maxWidth: "1000px",
  };

  const imageTextStyle = {
    color: "#E2C08A",
    fontSize: "80px",
    fontFamily: "Bebas Neue",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
  };

  const team = [
    {
      index: 1,
      name: "Saransh Golash",
      role: "CEO",
      imageSource: "/images/team1.jpg",
      alt: "Team member 1",
    },
    {
      index: 2,
      name: "Prakhar Raj",
      role: "COO",
      imageSource: "/images/team2.jpg",
      alt: "Team member 2",
    },
    {
      index: 3,
      name: "Siddharth Gupta",
      role: "Operations Head",
      imageSource: "/images/team3.jpg",
      alt: "Team member 3",
    },
    {
      index: 4,
      name: "Kavita Khandelwal",
      role: "Marketing Head",
      imageSource: "/images/team4.webp",
      alt: "Team member 4",
    },
    {
      index: 5,
      name: "Somasree Nandi",
      role: "Technical Lead",
      imageSource: "/images/team5.jpg",
      alt: "Team member 5",
    },
    {
      index: 6,
      name: "Ramesh Kundu",
      role: "HR",
      imageSource: "/images/team6.jpg",
      alt: "Team member 6",
    },
    {
      index: 7,
      name: "Abhay Pathak",
      role: "Customer Support",
      imageSource: "/images/team7.jpg",
      alt: "Team member 7",
    },
  ];

  return (
    <>
      <div className="aboutSection" style={{ ...aboutSectionStyle }}>
        <div className="content" style={containerStyle}>
          <span
            style={{
              ...imageTextStyle,
              fontSize: "70px",
              fontFamily: "League Spartan",
              marginLeft: "120px",
              marginTop: "70px",
            }}
          >
            Fashion That Moves with You
          </span>
          <span
            style={{
              ...imageTextStyle,
              fontSize: "28px",
              fontFamily: "kurale",
              color: "#F4F4F2",
              marginLeft: "120px",
            }}
          >
            Wear stylish, comfortable and affordable fashion accessible to
            everyone. From everyday essentials to statement pieces, every
            collection is thoughtfully curated for Men, Women, and Kids, helping
            one express themselves with confidence
          </span>
          <div
            style={{
              width: "1200px",
              height: "500px",
              marginTop: "20px",
              marginLeft: "220px",
            }}
          >
            <video width="100%" height="450px" controls autoPlay loop>
              <source src="/videos/ImpactVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          className="imageContainer"
          style={{
            ...containerStyle,
            background:
              "linear-gradient(135deg, #1C1A15 0%, rgba(226, 192, 138, 0.15) 100%)",
            width: "400px",
            height: "350px",
            marginRight: "120px",
            marginTop: "0px",
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
      <div className="aboutTeam">
        <span
          style={{
            ...aboutSectionStyle,
            color: "#D4AE73",
            textShadow:
              "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
            fontSize: "60px",
            fontFamily: "league spartan",
            marginLeft: "120px",
            marginTop: "40px",
            fontFamily: "League Spartan",
          }}
        >
          Meet Our Team →
        </span>
      </div>
      <div
        className="aboutImpactSection"
        style={{
          ...aboutSectionStyle,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {team.map((teamMember, index) => (
          <KnowTeam
            key={index}
            index={index}
            imgSource={teamMember.imageSource}
            alt={teamMember.alt}
            name={teamMember.name}
            role={teamMember.role}
            style={{
              ...imageTextStyle,
              fontSize: "14px",
              fontFamily: "kurale",
              color: "#F4F4F2",
            }}
          />
        ))}
      </div>
    </>
  );
}

function KnowTeam({ index, imgSource, alt, name, role, style }) {
  const knowTeamStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "20px",
    marginBottom: "50px",
  };

  return (
    <div className="knowTeam" style={{ ...knowTeamStyle }}>
      <img
        src={imgSource}
        alt={alt}
        style={{
          width: "150px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          marginTop: index % 2 != 0 ? "100px" : "0px",
        }}
      />
      <span
        style={{
          ...style,
          color: "#D4AE73",
          fontWeight: "bold",
          fontFamily: "raleway",
          fontSize: "16px",
        }}
      >
        {name}
      </span>
      <span style={style}>{role}</span>
    </div>
  );
}

function CoreValues() {
  const containerStyle = {
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const titleStyle = {
    color: "#E2C08A",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
    fontSize: "70px",
    fontFamily: "League Spartan",
    marginBottom: "50px",
  };
  const gridStyle = {
    display: "flex",
    gap: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "row wrap",
    maxWidth: "1200px",
  };
  const cardStyle = {
    background:
      "linear-gradient(135deg, rgba(226, 192, 138, 0.1) 0%, rgba(28, 26, 21, 0) 100%)",
    padding: "40px",
    borderRadius: "15px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid rgba(226, 192, 138, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Our Core Values</h2>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <FaLeaf size={50} color="#D4AE73" style={{ marginBottom: "20px" }} />
          <h3
            style={{
              color: "#F4F4F2",
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              letterSpacing: "2px",
            }}
          >
            Sustainability
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "16px",
              opacity: 0.8,
            }}
          >
            Eco-friendly materials and ethical manufacturing.
          </p>
        </div>
        <div style={cardStyle}>
          <FaUsers size={50} color="#D4AE73" style={{ marginBottom: "20px" }} />
          <h3
            style={{
              color: "#F4F4F2",
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              letterSpacing: "2px",
            }}
          >
            Inclusivity
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "16px",
              opacity: 0.8,
            }}
          >
            Fashion designed for every body type and identity.
          </p>
        </div>
        <div style={cardStyle}>
          <FaMedal size={50} color="#D4AE73" style={{ marginBottom: "20px" }} />
          <h3
            style={{
              color: "#F4F4F2",
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              letterSpacing: "2px",
            }}
          >
            Craftsmanship
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "16px",
              opacity: 0.8,
            }}
          >
            Premium quality fabrics made to last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const containerStyle = {
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const titleStyle = {
    color: "#E2C08A",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
    fontSize: "70px",
    fontFamily: "League Spartan",
    marginBottom: "50px",
  };
  const timelineStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    borderLeft: "2px solid #E2C08A",
    paddingLeft: "30px",
    marginLeft: "20px",
    maxWidth: "800px",
  };
  const itemStyle = {
    position: "relative",
  };
  const dotStyle = {
    position: "absolute",
    left: "-37px",
    top: "8px",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#D4AE73",
    border: "2px solid #161511",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Our Journey</h2>
      <div style={timelineStyle}>
        <div style={itemStyle}>
          <div style={dotStyle}></div>
          <h3
            style={{
              color: "#D4AE73",
              fontFamily: "Bebas Neue",
              fontSize: "28px",
            }}
          >
            2020: The Vision
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "18px",
            }}
          >
            Styvora was founded with a simple goal: making premium fashion
            accessible.
          </p>
        </div>
        <div style={itemStyle}>
          <div style={dotStyle}></div>
          <h3
            style={{
              color: "#D4AE73",
              fontFamily: "Bebas Neue",
              fontSize: "28px",
            }}
          >
            2022: The First Collection
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "18px",
            }}
          >
            We launched our first vendor's signature essentials collections,
            selling out in 48 hours.
          </p>
        </div>
        <div style={itemStyle}>
          <div style={dotStyle}></div>
          <h3
            style={{
              color: "#D4AE73",
              fontFamily: "Bebas Neue",
              fontSize: "28px",
            }}
          >
            2024: Going Global
          </h3>
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "raleway",
              fontSize: "18px",
            }}
          >
            Now shipping to over 15 countries and connecting people (vendors and
            customers).
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialProof() {
  const containerStyle = {
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const titleStyle = {
    color: "#E2C08A",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
    fontSize: "70px",
    fontFamily: "League Spartan",
    marginBottom: "50px",
    textAlign: "center",
  };
  const gridStyle = {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1000px",
  };
  const reviewStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    padding: "40px 30px",
    borderRadius: "10px",
    width: "350px",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>What People Say</h2>
      <div style={gridStyle}>
        <div style={reviewStyle}>
          <FaQuoteLeft
            size={24}
            color="#D4AE73"
            style={{ marginBottom: "20px", opacity: 0.8 }}
          />
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "kurale",
              fontSize: "20px",
              fontStyle: "italic",
              lineHeight: "1.5",
            }}
          >
            "The fit and quality are unparalleled. Travarsa is my new go-to for
            daily wear."
          </p>
          <span
            style={{
              color: "#E2C08A",
              fontFamily: "League Spartan",
              fontSize: "18px",
              marginTop: "20px",
              display: "block",
              textAlign: "right",
            }}
          >
            — Alex R.
          </span>
        </div>
        <div style={reviewStyle}>
          <FaQuoteLeft
            size={24}
            color="#D4AE73"
            style={{ marginBottom: "20px", opacity: 0.8 }}
          />
          <p
            style={{
              color: "#F4F4F2",
              fontFamily: "kurale",
              fontSize: "20px",
              fontStyle: "italic",
              lineHeight: "1.5",
            }}
          >
            "I've never felt more confident in affordable clothing. Simply
            amazing fabrics."
          </p>
          <span
            style={{
              color: "#E2C08A",
              fontFamily: "League Spartan",
              fontSize: "18px",
              marginTop: "20px",
              display: "block",
              textAlign: "right",
            }}
          >
            — Jordan M.
          </span>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  const navigate = useNavigate();
  const containerStyle = {
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  const titleStyle = {
    color: "#E2C08A",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
    fontSize: "60px",
    fontFamily: "Bebas Neue",
    letterSpacing: "3px",
    marginBottom: "20px",
  };
  const btnStyle = {
    padding: "15px 50px",
    fontSize: "22px",
    fontFamily: "League Spartan",
    color: "#1C1A15",
    backgroundColor: "#E2C08A",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(226, 192, 138, 0.4)",
    transition: "transform 0.2s",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Ready To Move With Us?</h2>
      <p
        style={{
          color: "#F4F4F2",
          textShadow:
            "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
          fontFamily: "raleway",
          fontSize: "22px",
          marginBottom: "20px",
          maxWidth: "600px",
        }}
      >
        Discover our latest collection and elevate your everyday style.
      </p>
      <button
        style={btnStyle}
        onClick={() => navigate("/products")}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Shop Now
      </button>
    </div>
  );
}

export default About;
