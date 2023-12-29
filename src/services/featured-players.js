import { collection, getDocs } from "firebase/firestore";
import { FEATURED_PLAYERS_COLLECTION } from "../config/constants";
import { db } from "../config/firebase";
import { flattenFirebaseData } from "../utils";

/**
 * Retrieves all Project Members the database.
 * 
 * @typedef {object} FeaturedPlayers
 * @property {string} name Name
 * @property {string} image Picture
 * @property {string} cohort Cohort
 * 
 * @returns {Promise<Array<FeaturedPlayers>>} An array of game objects.
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getFeaturedPlayers = async () => {
  try {
    const result = [];
    const request = await getDocs(collection(db, FEATURED_PLAYERS_COLLECTION));

    request.forEach((element) => {
      const player =  element.data();
      const image = player?.image[0]?.downloadURL;
      result.push({ ...player, image });
    });

    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};