import moment from "moment";
import { GAME_STATUS } from "../config/constants";

/**
 * Flattens an array of Firebase data by extracting the 'data' property from each element.
 *
 * @param {Array} firebaseData - An array of Firebase data.
 * @returns {Array} - An array of flattened data.
 */
export const flattenFirebaseData = (firebaseData) => {
  let array = [];
  firebaseData.forEach((element) => {
    const data = element.data();
    array.push({ ...data, id: element.id });
  });
  return array;
};

export const cn = (...args) => {
  return args.filter((arg) => Boolean(arg)).join(" ");
};

/**
 * Generates an array of specific length for building skeletons
 *
 * @param {number} size
 * @return {Array<number>}
 */
export const generateSkeleton = (size) => {
  return Array.from({ length: size }, (_, k) => k + 1);
};

export const isEmptyArray = (data) => {
  if (!Array.isArray(data)) return true;

  return data.length === 0;
};

export const hasData = (data) => {
  return Boolean(data);
};

export const formatCohortName = (cohort) => {
  return `Cohort ${cohort}`;
};

/**
 * Computes the status of a game based on its start and end dates.
 *
 * @param {string} startDate - The start date of the game in "DD-MM-YYYY" format.
 * @param {string} endDate - The end date of the game in "DD-MM-YYYY" format.
 * @returns {string} - The game status ("yet-to-start", "in-progress", or "ended").
 */
export const computeGameStatus = (startDate, endDate) => {
  if (!startDate || !endDate || startDate === "TBD")
    return GAME_STATUS.NOT_STARTED;

  const currentDate = moment();
  const _startDate = moment(startDate, "DD-MM-YYYY");
  const _endDate = moment(endDate, "DD-MM-YYYY");

  if (currentDate.isBefore(_startDate)) {
    return GAME_STATUS.NOT_STARTED;
  } else if (currentDate.isAfter(_endDate)) {
    return GAME_STATUS.ENDED;
  } else {
    return GAME_STATUS.IN_PROGRESS;
  }
};

/**
 * Converts a Firestore timestamp to a formatted date string.
 *
 * @param {Object} date - Firestore timestamp object.
 * @returns {string} - Formatted date string in "DD-MM-YYYY" format.
 */
export const convertTimestampToDate = (date) => {
  return moment(date.toDate()).format("DD-MM-YYYY");
};

/**
 * Get Items Within Date Range
 * @param {Array<T>} items - Array of items.
 * @param {string} startDate - The start date for filtering items.
 * @param {string} endDate - The end date for filtering items.
 * @param {string} dateFormat - The format of the dates (e.g., 'YYYY-MM-DD').
 * @returns {Array<T>} An array of items filtered by date range.
 */
export const filterItemsByDateRange = (items, startDate, endDate) => {
  const dateFormat = "DD-MM-YYYY";
  const filteredItems = items.filter((item) => {
    const itemStartDate = moment(item.startDate, dateFormat);
    const itemEndDate = moment(item.endDate, dateFormat);

    const filterStartDate = moment(startDate, dateFormat);
    const filterEndDate = moment(endDate, dateFormat);

    // Check if the item falls within the specified date range
    return (
      itemStartDate.isSameOrAfter(filterStartDate) &&
      itemEndDate.isSameOrBefore(filterEndDate)
    );
  });

  return filteredItems;
};

/**
 * Sort game results in descending order by points
 *
 * @typedef Result
 * @property {string} cohort
 * @property {number} score
 * @property {number} point
 *
 *
 * @param {Array<Result>} results
 */
export const sortGameResultsByPoints = (results) => {
  return results
    .sort((a, b) => b.point - a.point)
    .map((result, index) => ({
      ...result,
      position: addSuffixToNumber(index + 1),
    }));
};

const addSuffixToNumber = (number) => {
  let j = number % 10,
    k = number % 10;
  if (j === 1 && k !== 11) {
    return number + "st";
  }
  if (j === 2 && k !== 12) {
    return number + "nd";
  }
  if (j === 3 && k !== 13) {
    return number + "rd";
  }

  return number + "th";
};

export const chunkArray = (array, chunkSize) => {
  const resultArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    resultArray.push(array.slice(i, i + chunkSize));
  }
  return resultArray;
};
