function Footer() {

    const footerStyle = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '40px',
        marginTop: '80px',
        marginLeft: '120px',
        marginRight: '120px'
    };

    const columnStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
        gap: '20px',
        textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)',
        fontFamily: `'kurale', sans-serif`
    }

    const linkStyle = {
        color: '#F4F4F2',
        cursor: 'pointer'
    };

    const textStyle = {
        color: '#F4F4F2'
    };

    return(
        <>
        <div className="footer-main" style={{...footerStyle, justifyContent: 'space-between'}}>
            <div style={columnStyle}>
                <img src="/images/brand_name_footer.png" alt="Styvora" style={{width:'200px', height:'100px'}} />
            </div>
            <div style={columnStyle}>
                <span style={linkStyle}>About Us</span>
                <span style={linkStyle}>Our Products</span>
                <span style={linkStyle}>Contact Us</span>
                <span style={linkStyle}>Login/SignUp</span>
            </div>
            <div style={columnStyle}>
                <span style={textStyle}>Men</span>
                <span style={linkStyle}>Footwear</span>
                <span style={linkStyle}>Western</span>
                <span style={linkStyle}>Traditional</span>
            </div>
            <div style={columnStyle}>
                <span style={textStyle}>Women</span>
                <span style={linkStyle}>Footwear</span>
                <span style={linkStyle}>Western</span>
                <span style={linkStyle}>Traditional</span>
            </div>
            <div style={columnStyle}>
                <span style={linkStyle}>Privacy Policy</span>
                <span style={linkStyle}>Refund & Return Policy</span>
                <span style={linkStyle}>Terms & Conditions</span>
                <span style={linkStyle}>Subscribe to Our Newsletter</span>
            </div>
            <div style={columnStyle}>
                <span style={textStyle}>Email : support@styvora.com</span>
                <span style={textStyle}>Phone : +91 1234567890</span>
                <span style={textStyle}>Business Hours: Monday - Saturday | 10:00 AM - 7:00 PM</span>
            </div>
        </div>
        <div className="copyright" style={{...footerStyle, justifyContent: 'space-between'}}>
            <span style={{color: '#E2C08A', textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)', fontFamily:`'league spartan'`,}}>© 2026 Styvora Apparels. All rights reserved.</span>
            <span style={{color: '#E2C08A', textShadow: '0 0 10px rgba(226, 192, 138, 0.7), 0 0 20px rgba(226, 192, 138, 0.5), 0 0 40px rgba(226, 192, 138, 0.3)', fontFamily:`'league spartan'`,}}>Made with 💖 by Saransh Golash</span>
        </div>
        </>
    );
}

export default Footer;