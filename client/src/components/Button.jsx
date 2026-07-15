function Button({textBtn, style, onMouseEnter, onMouseLeave, handleClick}) {
    return(
        <button style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleClick}>{textBtn}</button>
    );
}

export default Button;