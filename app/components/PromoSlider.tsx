import React from "react";
import Carousel from "react-img-carousel";
import "react-img-carousel/lib/carousel.css"; // Required CSS

const PromoSlider = () => {
  return (
    <div className="container mx-auto mt-10" style={{ maxWidth: 400 }}>
      <Carousel
        viewportWidth="100%"
        dots={false}
        arrows={true}
        loop={true}
        autoPlay={true}
        transitionDuration={500}
        height="200px"
      >
        <img src="/bg1.png" alt="Slide 1" />
        <img src="/bg2.png" alt="Slide 2" />
      </Carousel>
    </div>
  );
};

export default PromoSlider;
