function NavBar() {
    const navbarMain = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexFlow: 'row nowrap',
        gap: '20px'
    };

    return(
        <div className="navbar-main" style={navbarMain}></div>
    );
}

export default NavBar;