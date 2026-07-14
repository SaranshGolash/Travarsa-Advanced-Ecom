import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

function Landing() {
    return(
        <div className="landing-main">
           <NavBar />
           <Banner />
           <LandingBody />
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
        marginLeft: '60px'
    };

    const landingBodyContent = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexFlow: 'column nowrap',
        gap: '20px'
    };

    const textStyle = {
        color: '#E2C08A',
        fontSize: '72px',
        fontFamily: `'League Spartan', sans-serif`,
        textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)'
    }

    return(
        <div className="landingBody-main" style={landingBodyMain}>
            <div className="landingBody-content" style={landingBodyContent}>
                <span style={textStyle}>STYVORA</span>
                <span style={{...textStyle, color:'#FFFFFF', fontSize:'48px', marginLeft:'60px', marginTop:'-55px',}}>Apparels</span>
                <div className="btn-block"></div>
                <div className="happy-customers"></div>
            </div>
            <div className="landingBody-video"></div>
        </div>
    );
}

export default Landing;