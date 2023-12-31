import React from "react";
import Slider from "react-slick";
import { cn } from "../utils";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";
import FeaturedGalleryBtn from "./FeaturedGalleryBtn";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <FeaturedGalleryBtn Icon={ChevronRight} />,
  prevArrow: <FeaturedGalleryBtn Icon={ChevronLeft} />,
  lazyLoad: true,
};

const FeaturedGallery = ({ images, className }) => {
  return (
    <div className={cn("space-y-8 md:space-y-16", className)}>
      <h4 className="text-center text-primary text-2xl font-bold md:text-[32px] md:leading-10">
        Featured Gallery
      </h4>
      <div className="w-[92%] max-w-[780px] mx-auto">
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image}
              className="w-full h-auto md:w-[780px] md:h-[521px] overflow-hidden"
            >
              <img
                loading="lazy"
                src={image}
                alt="Gallery Image"
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedGallery;
