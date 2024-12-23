

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item bg-hero1 bg-no-repeat relative w-full">

            <h1 className="text-white flex justify-center mx-auto items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ratione?</h1>
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item bg-hero2 relative w-full">
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item bg-no-repeat bg-hero3 h-[500px] relative w-full">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" /> */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item  bg-hero4 relative w-full">
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;