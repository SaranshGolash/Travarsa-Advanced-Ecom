import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Button from "../components/Button";

function Landing() {
    return(
        <div className="landing-main">
           <NavBar />
           <Banner />
           <LandingBody />
           <Counter />
        </div>
    );
}

function LandingBody() {
    
    const landingBodyMain = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexFlow: 'row nowrap',
        gap: '50px',
        marginLeft: '60px',
        marginTop: '20px'
    };

    const landingBodyContent = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexFlow: 'column nowrap',
        gap: '20px',
        width: '600px',
        marginLeft: '60px'
    };

    const textStyle = {
        color: '#E2C08A',
        fontSize: '112px',
        fontFamily: `'League Spartan', sans-serif`,
        textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)',
    };

    const btnBlockStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px',
        width: '400px',
        marginLeft: '-30px'
    };

    const btnStyle = {
        background: '#D4AE73',
        color: '#F4F4F2',
        fontWeight: '500',
        boxShadow:'0 7px 14px rgba(226, 192, 138, 0.3)',
        border: '1px solid #D4AE73',
        borderRadius: '10px',
        width: '100px',
        padding: '10px 0px 10px 0px'
    };

    const happyCustomersStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '20px',
        marginTop: '15px',
        marginLeft: '-15px'
    };

    const happyCustomerImagesStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '20px'
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        border: 'none',
        borderRadius: '50%',
        objectFit: 'cover'
    };

    return(
        <div className="landingBody-main" style={landingBodyMain}>
            <div className="landingBody-content" style={landingBodyContent}>
                <span style={textStyle}>STYVORA</span>
                <span style={{...textStyle, color:'#FFFFFF', fontSize:'78px', marginLeft:'0px', marginTop:'-55px',}}>Apparels</span>
                <div className="btn-block" style={btnBlockStyle}>
                    <Button textBtn={"Men"} style={btnStyle}/>
                    <Button textBtn={"Women"} style={btnStyle}/>
                    <Button textBtn={"Kids"} style={btnStyle}/>
                    <Button textBtn={"Shirts"} style={btnStyle}/>
                    <Button textBtn={"Footwear"} style={btnStyle}/>
                    <Button textBtn={"Tops"} style={btnStyle}/>
                </div>
                <div className="happy-customers" style={happyCustomersStyle}>
                    <div className="happy-customers-images" style={happyCustomerImagesStyle}>
                        <img src="/images/h1.jpg" alt="C1" style={{...imageStyle, marginLeft: '10px'}} />
                        <img src="/images/h2.jpg" alt="C2" style={{...imageStyle, marginLeft: '-35px'}} />
                        <img src="/images/h3.webp" alt="C3" style={{...imageStyle, marginLeft: '-35px'}} />
                        <img src="/images/h4.jpg" alt="C4" style={{...imageStyle, marginLeft: '-35px'}} />
                    </div>
                    <div className="happy-customers-rating">
                        <div>
                            <span style={{...textStyle, fontSize:'18px', marginLeft:'0px', marginTop:'0px'}}>Our Happy Customers</span>
                        </div>
                        <div>
                            <span style={{fontSize:'14px', color:'white', marginLeft: '-65px'}}>
                                4.0 ⭐⭐⭐⭐ 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landingBody-video" style={{width:'1200px', height:'500px', marginTop: '20px'}}>
                <video width="100%" height="450px" controls autoPlay muted loop>
        <source src="/videos/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </div>
        </div>
    );
}

function Counter() {

    const counterStyle ={
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '200px'
    };

    const addStyle = {
        width: '500px',
        height: '200px'
    };

    return(
        <div className="counter-main" style={counterStyle}>
            <CounterContent number={"100+"} text={"Happy Customers"} addStyle={{...addStyle, marginLeft: '70px'}}/>
            <CounterContent number={"50+"} text={"Vendors Partnered"} addStyle={addStyle} />
            <CounterContent number={"1000+"} text={"Trending Products"} addStyle={addStyle}/>
            <CounterContent number={"10+"} text={"Years of Service"} addStyle={{...addStyle, marginRight: '70px'}} />
        </div>
    );
}

function CounterContent({number, text, addStyle}) {
    
    const counterContentsStyle ={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        gap: '10px',
        color: '#E2C08A',
        textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)'
    };

    return(
        <div className="counter-contents" style={{...counterContentsStyle, ...addStyle}}>
            <span style={{fontSize: '74px'}}>{number}</span>
            <span style={{fontSize: '28px', color:'#F4F4F2', textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)',}}>{text}</span>
        </div>
    );
}

export default Landing;