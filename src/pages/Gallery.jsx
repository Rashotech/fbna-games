import React, { useEffect, useState } from "react";
import { getGallery } from "../services/gallery";
import GalleryCard from "../components/GalleryCard";
import { chunkArray } from "../utils";

// import {
//   Fbn_1,
//   Fbn_2,
//   Fbn_3,
//   Fbn_4,
//   Fbn_5,
//   Fbn_6,
//   Fbn_7,
//   Fbn_8,
//   Fbn_9,
//   Fbn_10,
//   Fbn_11,
//   Fbn_12,
//   Fbn_13,
//   Fbn_14,
//   Fbn_15,
// } from "../assets/index";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGalleryImages();
  }, []);

  const getGalleryImages = async () => {
    try {
      setLoading(true);
      const gallery = await getGallery();
      console.log(gallery);
      const images = chunkArray(gallery, 6);
      setGalleryImages(images);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center text-4xl font-bold my-14 text_color">
          We value every memory created...
        </h2>
        {galleryImages.map((images, index) => (
          <GalleryCard key={index} images={images} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
