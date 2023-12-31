import { collection, getDocs } from "firebase/firestore";
import { PROJECT_MEMBERS_COLLECTION } from "../config/constants";
import { db } from "../config/firebase";

/**
 * Retrieves all Project Members the database.
 * 
 * @typedef {object} ProjectMembers
 * @property {string} name Name
 * @property {string} image Picture
 * @property {string} role Role
 * 
 * @returns {Promise<Array<ProjectMembers>>} An array of game objects.
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getProjectMembers = async () => {
  try {
    const result = [];
    const request = await getDocs(collection(db, PROJECT_MEMBERS_COLLECTION));

    request.forEach((element) => {
      const member =  element.data();
      const image = member?.image[0]?.downloadURL;
      result.push({ ...member, id: element.id, image });
    });

    const members = result.sort((a, b) => (a.order > b.order ? 1 : -1));
    return members;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};