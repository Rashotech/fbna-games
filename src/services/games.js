import { collection, getDocs } from "firebase/firestore";
import { GAMES_COLLECTION } from "../config/constants";
import { db } from "../config/firebase";
import { flattenFirebaseData } from "../utils";

export const getAllGames = async () => {
  try {
    const request = await getDocs(collection(db, GAMES_COLLECTION));
    const games = flattenFirebaseData(request);
    return games;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
