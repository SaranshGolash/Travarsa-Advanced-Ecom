import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    const imageStyle = {
        height: '500px',
        width: '100%',
        objectFit: 'auto'
    };

    return(
        <div className="banner-main">
            <Carousel>
                <Carousel.Item>
                    <img src="/images/banner1.png" alt="First slide" style={imageStyle} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/banner2.png" alt="Second slide" style={imageStyle} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/banner3.png" alt="Third slide" style={imageStyle} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;