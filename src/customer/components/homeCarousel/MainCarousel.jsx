import React from "react";
import { mainCarouselData } from "./MainCarouselData.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img src={item.image} alt="photo" className="h-[200px] md:h-[600px]" />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
