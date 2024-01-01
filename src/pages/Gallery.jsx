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
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-white">
        <h2 className="text-center text-4xl font-bold py-14 text_color">
          We value every memory created...
        </h2>
        {galleryImages.map((images, index) => (
          <GalleryCard key={index} images={images} />
        ))}
      </div>
  );
};

export default Gallery;
