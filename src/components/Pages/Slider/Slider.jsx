import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <img src="https://images.unsplash.com/photo-1500463959177-e0869687df26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZCUyMGFuaW1hbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1618142990632-1afb1bd67e7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGQlMjBhbmltYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1520541868116-c0480187f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdpbGQlMjBhbmltYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1543522933-b4894203e509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdpbGQlMjBhbmltYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;