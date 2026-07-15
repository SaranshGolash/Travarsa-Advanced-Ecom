import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Button from "../components/Button";

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
    };

    const btnBlockStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '20px',
        width: '300px'
    };

    const btnStyle = {
        background: '#D4AE73',
        color: '#FFFFFF',
        boxShadow:'0 7px 14px rgba(226, 192, 138, 0.5),0 7px 14px rgba(226, 192, 138, 0.3)',
        border: '1px solid #D4AE73',
        borderRadius: '10px',
        width: '80px',
    };

    const happyCustomersStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '20px'
    };

    return(
        <div className="landingBody-main" style={landingBodyMain}>
            <div className="landingBody-content" style={landingBodyContent}>
                <span style={textStyle}>STYVORA</span>
                <span style={{...textStyle, color:'#FFFFFF', fontSize:'48px', marginLeft:'60px', marginTop:'-55px',}}>Apparels</span>
                <div className="btn-block" style={btnBlockStyle}>
                    <Button textBtn={"Men"} style={btnStyle}/>
                    <Button textBtn={"Women"} style={btnStyle}/>
                    <Button textBtn={"Kids"} style={btnStyle}/>
                    <Button textBtn={"Shirts"} style={btnStyle}/>
                    <Button textBtn={"Footwear"} style={btnStyle}/>
                    <Button textBtn={"Tops"} style={btnStyle}/>
                </div>
                <div className="happy-customers" style={happyCustomersStyle}>
                    <div className="happy-customers-images"></div>
                    <div className="happy-customers-rating"></div>
                </div>
            </div>
            <div className="landingBody-video"></div>
        </div>
    );
}

export default Landing;