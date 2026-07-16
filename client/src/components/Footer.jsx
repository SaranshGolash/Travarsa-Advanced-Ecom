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

    return(
        <>
        <div className="footer-main" style={{...footerStyle, justifyContent: 'space-between'}}>
            <div style={columnStyle}>
                <img src="/images/brand_name_footer.png" alt="Styvora" style={{width:'200px', height:'100px'}} />
            </div>
            <div style={columnStyle}>
                <span style={{color:'#F4F4F2'}}>About Us</span>
                <span style={{color:'#F4F4F2'}}>Our Products</span>
                <span style={{color:'#F4F4F2'}}>Contact Us</span>
                <span style={{color:'#F4F4F2'}}>Login/SignUp</span>
            </div>
            <div style={columnStyle}>
                <span style={{color:'#F4F4F2'}}>Men</span>
                <span style={{color:'#F4F4F2'}}>Footwear</span>
                <span style={{color:'#F4F4F2'}}>Western</span>
                <span style={{color:'#F4F4F2'}}>Traditional</span>
            </div>
            <div style={columnStyle}>
                <span style={{color:'#F4F4F2'}}>Women</span>
                <span style={{color:'#F4F4F2'}}>Footwear</span>
                <span style={{color:'#F4F4F2'}}>Western</span>
                <span style={{color:'#F4F4F2'}}>Traditional</span>
            </div>
            <div style={columnStyle}>
                <span style={{color:'#F4F4F2'}}>Privacy Policy</span>
                <span style={{color:'#F4F4F2'}}>Refund & Return Policy</span>
                <span style={{color:'#F4F4F2'}}>Terms & Conditions</span>
                <span style={{color:'#F4F4F2'}}>Subscribe to Our Newsletter</span>
            </div>
            <div style={columnStyle}>
                <span style={{color:'#F4F4F2'}}>Email : support@styvora.com</span>
                <span style={{color:'#F4F4F2'}}>Phone : +91 1234567890</span>
                <span style={{color:'#F4F4F2'}}>Business Hours: Monday - Saturday | 10:00 AM - 7:00 PM</span>
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