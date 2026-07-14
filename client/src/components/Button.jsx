function Button({textBtn, btnStyle, onMouseEnter, onMouseLeave, handleClick}) {
    return(
        <button style={btnStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleClick}>{textBtn}</button>
    );
}

export default Button;