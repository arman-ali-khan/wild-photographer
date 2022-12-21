import React from 'react';

const SliderItem = () => {
    return (
        <div id="slide1" className="carousel-item h-12 relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full h-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
    );
};

export default SliderItem;