import { collection, getDocs } from "firebase/firestore";
import { GALLERY_COLLECTION } from "../config/constants";
import { db } from "../config/firebase";

/**
 * Retrieves all Project Members the database.
 * 
 * @typedef {object} Gallery
 * @property {string} image Image URL
 * 
 * @returns {Promise<Array<Gallery>>} An array of images
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getGallery = async () => {
  try {
    const result = [];
    const request = await getDocs(collection(db, GALLERY_COLLECTION));

    request.forEach((element) => {
      const gallery =  element.data();
      const image = gallery?.image[0]?.downloadURL;
      result.push(image);
    });

    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};