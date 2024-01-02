import React from "react";
import PropTypes from "prop-types";

const GalleryCard = ({ images }) => {
  if (!images || images.length == 0) return null;

  return (
    <div className="flex mx-auto w-11/12 justify-start card_container">
      <div className="flex w-3/4  flex-wrap justify-end">
        {images[0] && (
          <div class="small_image overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src={images[0].image}
              alt="Your Image"
            />
          </div>
        )}
        {images[1] && (
          <div class="small_image overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src={images[1].image}
              alt="Your Image"
            />
          </div>
        )}
        {images[2] && (
          <div class="small_image overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src={images[2].image}
              alt="Your Image"
            />
          </div>
        )}
        {images[3] && (
          <div class="bottom_long_image overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src={images[3].image}
              alt="Your Image"
            />
          </div>
        )}
        {images[4] && (
          <div class="bottom_corner_image overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src={images[4].image}
              alt="Your Image"
            />
          </div>
        )}
      </div>

      {images[5] && (
        <div class="side_long_image overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src={images[5].image}
            alt="Your Image"
          />
        </div>
      )}
    </div>
  );
};

GalleryCard.propTypes = {
  images: PropTypes.array.isRequired,
};

export default GalleryCard;
