import React, { useEffect, useState } from "react";
import { getGallery } from "../services/gallery";
import GalleryCard from "../components/GalleryCard";
import { chunkArray } from "../utils";

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
      const images = chunkArray(gallery, 6);
      setGalleryImages(images);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const redirectToGallery = () => {
    window.location.href =
      "https://drive.google.com/drive/folders/1DRqt4vxKGIZ6y495QZnnix0wSEAJbubc?usp=sharing";
  };

  return (
    <div className="bg-white">
      <h2 className="text-center text-4xl font-bold py-14 text_color">
        We value every memory created...
      </h2>
      {galleryImages.map((images, index) => (
        <GalleryCard key={index} images={images} />
      ))}

      <div className="max-w-[210px] mx-auto">
        <button
          className="px-4 py-2 rounded-md my-10 bg-btnbg focus:outline-none transition-colors hover:bg-primary hover:text-white"
          onClick={redirectToGallery}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Gallery;
