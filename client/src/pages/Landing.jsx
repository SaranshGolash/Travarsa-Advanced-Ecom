import React, { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Landing() {
  const menProductsImages = [
    { src: "/images/highlanderMenShirt.jpg", alt: "Highlander Men Shirt" },
    { src: "/images/BearHouseMenTShirt.jpg", alt: "Bear House Men T-Shirt" },
    {
      src: "/images/LevisMensPrintedLooseFitTShirt.jpg",
      alt: "Levi's Men's Printed Loose Fit T-Shirt",
    },
    { src: "/images/BenMartinMenJeans.jpg", alt: "Ben Martin Men Jeans" },
    {
      src: "/images/MensCottonBaggyTrackpants.jpg",
      alt: "Men's Cotton Baggy Trackpants",
    },
    {
      src: "/images/GentlemanMensSleevelessTankTop.jpg",
      alt: "Gentleman Men's Sleeveless Tank Top",
    },
    {
      src: "/images/LymioPoloTshirtForMen.jpg",
      alt: "Lymio Polo T-Shirt For Men",
    },
    { src: "/images/NoberoJoggersForMen.jpg", alt: "Nobero Joggers For Men" },
  ];

  const womenProductsImages = [
    {
      src: "/images/HighWaistJeansForWomen.jpg",
      alt: "High Waist Jeans For Women",
    },
    {
      src: "/images/AlanJonesClothingWomensSolidZipperSweatShirt.jpg",
      alt: "Alan Jones Clothing Womens Solid Zipper Sweatshirt",
    },
    {
      src: "/images/MOKOSHWomensSilkEmbroideryAnarkali.jpg",
      alt: "MOKOSH Women's Silk Embroidery Anarkali",
    },
    {
      src: "/images/StyleQuotientWomenSolidPolycottonShirt.jpg",
      alt: "Style Quotient Women Solid Polycotton Shirt",
    },
    { src: "/images/TokyoTalkiesTops.jpg", alt: "tokyo Talkies Tops" },
    {
      src: "/images/WomensPureCottonPrintedKurtaSet.jpg",
      alt: "Women's Pure Cotton Printed Kurta Set",
    },
    {
      src: "/images/Marks&SpencerWomenCasualTrousers.jpg",
      alt: "Marks & Spencer Women Casual Trousers",
    },
    {
      src: "/images/LondonHillsWomenCottonPrintedTShirt.jpg",
      alt: "London Hills Women Cotton Printed T-Shirt",
    },
  ];

  const whyChooseUsStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    marginLeft: "120px",
    marginRight: "120px",
    flexFlow: "row nowrap",
  };

  return (
    <div className="landing-main">
      <NavBar />
      <Banner />
      <LandingBody />
      <Counter />
      <ProductsSlideshow
        sectionHead={"Explore Men's Section →"}
        images={menProductsImages}
      />
      <div className="whyChooseUs" style={whyChooseUsStyle}>
        <div
          className="whyChooseUs-content"
          style={{
            ...whyChooseUsStyle,
            justifyContent: "start",
            flexFlow: "column nowrap",
            gap: "10px",
            margin: "none",
          }}
        >
          <span
            style={{
              color: "#E2C08A",
              fontSize: "80px",
              fontFamily: `'League Spartan', sans-serif`,
              textShadow:
                "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
            }}
          >
            Why Customers Choose Us?
          </span>
          <span
            style={{
              color: "#FFFFFF",
              textShadow:
                "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
              fontFamily: "Kurale",
              fontSize: "24px",
            }}
          >
            Premium Quality | Affordable Price | Trending Style | Easy Refund &
            Return Policy
          </span>
        </div>
        <div
          className="imageSection"
          style={{
            ...whyChooseUsStyle,
            justifyContent: "center",
            flexFlow: "row wrap",
            gap: "40px",
            maxWidth: "1000px",
            marginTop: "60px",
          }}
        >
          <img
            src="/images/KidsHoodedSweatshirt.jpg"
            alt=""
            style={{ width: "250px", height: "200px", borderRadius: "30px" }}
          />
          <img
            src="/images/MenTerminatorRunningShoes.jpg"
            alt=""
            style={{ width: "250px", height: "200px", borderRadius: "30px" }}
          />
          <img
            src="/images/PumaMensCourtShatterLowSneakers.jpg"
            alt=""
            style={{ width: "250px", height: "200px", borderRadius: "30px" }}
          />
          <img
            src="/images/FullSleevesBoysHoodies.jpg"
            alt=""
            style={{ width: "250px", height: "200px", borderRadius: "30px" }}
          />
        </div>
      </div>
      <ProductsSlideshow
        sectionHead={"Explore Women's Section →"}
        images={womenProductsImages}
      />
      <Testimonial />
      <Footer />
    </div>
  );
}

function LandingBody() {
  const landingBodyMain = {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexFlow: "row nowrap",
    gap: "50px",
    marginLeft: "60px",
    marginTop: "20px",
  };

  const landingBodyContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexFlow: "column nowrap",
    gap: "20px",
    width: "600px",
    marginLeft: "60px",
  };

  const textStyle = {
    color: "#E2C08A",
    fontSize: "112px",
    fontFamily: `'League Spartan', sans-serif`,
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
  };

  const btnBlockStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row wrap",
    gap: "20px",
    width: "400px",
    marginLeft: "-30px",
  };

  const btnStyle = {
    background: "#D4AE73",
    color: "#F4F4F2",
    fontWeight: "500",
    boxShadow: "0 7px 14px rgba(226, 192, 138, 0.3)",
    border: "1px solid #D4AE73",
    borderRadius: "10px",
    width: "100px",
    padding: "10px 0px 10px 0px",
  };

  const happyCustomersStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row nowrap",
    gap: "20px",
    marginTop: "15px",
    marginLeft: "-15px",
  };

  const happyCustomerImagesStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row nowrap",
    gap: "20px",
  };

  const imageStyle = {
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <div className="landingBody-main" style={landingBodyMain}>
      <div className="landingBody-content" style={landingBodyContent}>
        <span style={textStyle}>STYVORA</span>
        <span
          style={{
            ...textStyle,
            color: "#FFFFFF",
            fontSize: "78px",
            marginLeft: "0px",
            marginTop: "-55px",
            fontFamily: "kurale",
            letterSpacing: "5px",
          }}
        >
          Apparels
        </span>
        <div className="btn-block" style={btnBlockStyle}>
          <Button textBtn={"Men"} style={btnStyle} />
          <Button textBtn={"Women"} style={btnStyle} />
          <Button textBtn={"Kids"} style={btnStyle} />
          <Button textBtn={"Shirts"} style={btnStyle} />
          <Button textBtn={"Footwear"} style={btnStyle} />
          <Button textBtn={"Tops"} style={btnStyle} />
        </div>
        <div className="happy-customers" style={happyCustomersStyle}>
          <div
            className="happy-customers-images"
            style={happyCustomerImagesStyle}
          >
            <img
              src="/images/h1.jpg"
              alt="C1"
              style={{ ...imageStyle, marginLeft: "10px" }}
            />
            <img
              src="/images/h2.jpg"
              alt="C2"
              style={{ ...imageStyle, marginLeft: "-35px" }}
            />
            <img
              src="/images/h3.webp"
              alt="C3"
              style={{ ...imageStyle, marginLeft: "-35px" }}
            />
            <img
              src="/images/h4.jpg"
              alt="C4"
              style={{ ...imageStyle, marginLeft: "-35px" }}
            />
          </div>
          <div className="happy-customers-rating">
            <div>
              <span
                style={{
                  ...textStyle,
                  fontSize: "18px",
                  marginLeft: "0px",
                  marginTop: "0px",
                }}
              >
                Our Happy Customers
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "14px",
                  color: "white",
                  marginLeft: "-65px",
                }}
              >
                4.0 ⭐⭐⭐⭐
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="landingBody-video"
        style={{ width: "1200px", height: "500px", marginTop: "20px" }}
      >
        <video width="100%" height="450px" controls autoPlay muted loop>
          <source src="/videos/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function Counter() {
  const counterStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexFlow: "row nowrap",
    gap: "200px",
    marginLeft: "10px",
  };

  const addStyle = {
    width: "500px",
    height: "200px",
  };

  return (
    <div className="counter-main" style={counterStyle}>
      <CounterContent
        number={"100+"}
        text={"Happy Customers"}
        addStyle={{ ...addStyle, marginLeft: "70px" }}
      />
      <CounterContent
        number={"50+"}
        text={"Vendors Partnered"}
        addStyle={addStyle}
      />
      <CounterContent
        number={"1000+"}
        text={"Trending Products"}
        addStyle={addStyle}
      />
      <CounterContent
        number={"10+"}
        text={"Years of Service"}
        addStyle={{ ...addStyle, marginRight: "70px" }}
      />
    </div>
  );
}

function CounterContent({ number, text, addStyle }) {
  const counterContentsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "10px",
    color: "#E2C08A",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
  };

  return (
    <div
      className="counter-contents"
      style={{ ...counterContentsStyle, ...addStyle }}
    >
      <span style={{ fontSize: "74px", fontFamily: `'Raleway', sans-serif` }}>
        {number}
      </span>
      <span
        style={{
          fontSize: "28px",
          color: "#F4F4F2",
          textShadow:
            "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
          fontFamily: `'kurale', sans-serif`,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function ProductsSlideshow({ sectionHead, images }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationFrameId;

    const scroll = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
      }

      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2 - 1;
      } else if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 1;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const containerStyle = {
    overflowX: "auto",
    overflowY: "hidden",
    marginTop: "40px",
    marginLeft: "120px",
    marginRight: "120px",
    whiteSpace: "nowrap",
    WebkitOverflowScrolling: "touch",
  };

  const trackStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexFlow: "row nowrap",
    gap: "50px",
    width: "max-content",
  };

  const productImageStyle = {
    width: "200px",
    height: "200px",
    flexShrink: 0,
  };

  const sectionHeadStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    color: "#D4AE73",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
    fontSize: "60px",
    fontFamily: "league spartan",
    marginTop: "40px",
    marginLeft: "120px",
  };

  return (
    <>
      <div className="sectionHead" style={sectionHeadStyle}>
        <span>{sectionHead}</span>
      </div>
      <div
        className="productsSlideshow-main no-scrollbar"
        style={containerStyle}
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div style={trackStyle}>
          {images.map((img, index) => (
            <ProductImage
              key={`orig-${index}`}
              src={img.src}
              alt={img.alt}
              productImageStyle={productImageStyle}
            />
          ))}
          {images.map((img, index) => (
            <ProductImage
              key={`dup-${index}`}
              src={img.src}
              alt={img.alt}
              productImageStyle={productImageStyle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function ProductImage({ src, alt, productImageStyle }) {
  return (
    <div className="productImage-main">
      <img src={src} alt={alt} style={productImageStyle} />
    </div>
  );
}

function Testimonial() {
  const testimonialStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "row nowrap",
    marginTop: "40px",
    marginLeft: "120px",
    marginRight: "120px",
    height: "500px",
  };

  const testimonials = [
    {
      image: "/images/h1.jpg",
      alt: "Customer1",
      name: "David Lawson",
      description:
        "This is a great website for fashion! Great variety of products.",
      rating: "5.0 ⭐⭐⭐⭐⭐",
    },
    {
      image: "/images/h2.jpg",
      alt: "Customer2",
      name: "Kavita Golash",
      description: "Amazing, such comfortable footwears they have.",
      rating: "4.0 ⭐⭐⭐⭐",
    },
    {
      image: "/images/h3.webp",
      alt: "Customer3",
      name: "Chris Evans",
      description: "Loved it! The UI for this website is so user-friendly.",
      rating: "5.0 ⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="testimonial-main" style={testimonialStyle}>
      {testimonials.map((testimonial, index) => (
        <TestimonialContent key={index} {...testimonial} />
      ))}
    </div>
  );
}

function TestimonialContent({ image, alt, name, description, rating }) {
  const testimonialCardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column nowrap",
    gap: "30px",
    width: "300px",
    height: "300px",
    marginTop: "80px",
    color: "#F4F4F2",
    textShadow:
      "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
  };

  return (
    <div className="testimonialContent" style={testimonialCardStyle}>
      <img
        src={image}
        alt={alt}
        style={{
          width: "300px",
          height: "200px",
          border: "1px solid #D4AE73",
          boxShadow:
            "0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)",
          borderRadius: "30px",
        }}
      />
      <span style={{ color: "#D4AE73" }}>{name}</span>
      <span>{description}</span>
      <span style={{ textShadow: "none" }}>{rating}</span>
    </div>
  );
}

export default Landing;
