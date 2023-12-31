import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { GAMES_COLLECTION } from "../config/constants";
import { db } from "../config/firebase";
import {
  computeGameStatus,
  convertTimestampToDate,
  filterItemsByDateRange,
  flattenFirebaseData,
  getRandomGames,
} from "../utils";

/**
 * Retrieves all games from the database.
 * @returns {Promise<Array<Game>>} An array of game objects.
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getAllGames = async () => {
  try {
    let games = [];
    const request = await getDocs(collection(db, GAMES_COLLECTION));

    request.forEach((element) => {
      const game = extractAndRefineGameData(element.id, element.data());
      games.push(game);
    });

    return games;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

/**
 * Retrieves single game from the database.
 * @param {string} id - Game ID
 * @returns {Promise<Game>} An array of game objects.
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getSingleGame = async (id) => {
  try {
    const docRef = doc(db, GAMES_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) throw new Error("Document does not exist");

    const game = extractAndRefineGameData(docSnap.id, docSnap.data());
    return game;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

/**
 * Get Games With Date Range using Date filter
 * @param {string} startDate - The start date for filtering games in "DD-MM-YYYY" format.
 * @param {string} endDate - The end date for filtering games in "DD-MM-YYYY" format.
 * @returns {Promise<Array<Game>>} An array of game objects filtered by date range.
 * @throws {Error} Throws an error if there's an issue with the retrieval process.
 */
export const getGamesByDateRange = async (startDate, endDate) => {
  try {
    const games = await getAllGames();
    let  filteredGames = filterItemsByDateRange(games, startDate, endDate);

    if (filteredGames.length === 0) {
      // If no games match the date range, select 3 random games without a start date
      const gamesWithoutStartDate = games.filter(game => game.startDate === "TBD");
      const randomGames = getRandomGames(gamesWithoutStartDate, 3);

      filteredGames = randomGames;
    }

    return filteredGames;
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};

/**
 * @typedef {Object} Participant
 * @property {string} cohort - The cohort of the participant.
 * @property {string} name - The name of the participant.
 */

/**
 * @typedef {Object} Result
 * @property {number} score - The score achieved.
 * @property {string} cohort - The cohort associated with the score.
 * @property {number} point - The point earned.
 */

/**
 * Extract and Refine Gam eData
 * @param {string} id - Game ID
 * @param {Object} game - Raw Game Data
 *
 * @typedef {Object} Game
 * @property {string} venue - The venue where the game took place.
 * @property {string} startDate - The start date of the game.
 * @property {Array<Participant>} participants - The array of participants in the game.
 * @property {string} name - The name of the game.
 * @property {string} description - The description of the game.
 * @property {string} type - The type of the game (e.g., indoor).
 * @property {Array<string>} images - The array of image URLs associated with the game.
 * @property {string} img - The main image URL of the game.
 * @property {string} endDate - The end date of the game.
 * @property {Array<Result>} result - The array of results for each cohort.
 * @property {string} status - The status of the game ("yet-to-start", "in-progress", or "ended").
 *
 * @returns  {Game} game
 */
export const extractAndRefineGameData = (id, game) => {
  try {
    const startDate = game?.startDate ? convertTimestampToDate(game.startDate): "TBD";
    const endDate = game?.endDate ? convertTimestampToDate(game.endDate) : "TBD";
    const img = game?.img[0]?.downloadURL ?? null;
    const images = game?.images ? game?.images?.map((image) => image?.downloadURL) : [];
    const participants = game?.participants ? game.participants?.sort((a, b) =>
      a.cohort > b.cohort ? 1 : -1
    ) : [];
    const result = game?.result ? game.result?.sort((a, b) => (a.cohort > b.cohort ? 1 : -1)): [];
    const status = computeGameStatus(startDate, endDate);

    return {
      ...game,
      id,
      startDate,
      endDate,
      img,
      images,
      result,
      participants,
      status,
    };
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

/**
 * Fetches the Overall Leaderboard
 *
 * @typedef {object} LeaderBoard
 * @property {string} cohort Cohort Number
 * @property {number} averagePoints Avergae Points
 *
 * @returns  {Promise<Array<LeaderBoard>>} leaderboard
 */
export const getLeaderboard = async () => {
  try {
    const request = await getDocs(collection(db, GAMES_COLLECTION));
    const gamesData = flattenFirebaseData(request);

    // Create a map to store cumulative points for each cohort
    const cohortStatsMap = new Map();

    // Process each game and participant to calculate cumulative points for each cohort
    gamesData.forEach((game) => {
      if(!game?.result) return;
      game.result.forEach((result) => {
        const { point, cohort } = result;
        const cohortStats = cohortStatsMap.get(cohort) || {
          totalPoints: 0,
        };
        cohortStats.totalPoints += point;
        cohortStatsMap.set(cohort, cohortStats);
      });
    });
 
    // Calculate average points for each cohort
    const leaderboard = Array.from(cohortStatsMap.entries()).map(
      ([cohort, stats]) => ({
        cohort,
        averagePoints: stats.totalPoints
      })
    );

    // Sort the leaderboard by average points (descending order)
    leaderboard.sort((a, b) => b.averagePoints - a.averagePoints);

    return leaderboard;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
