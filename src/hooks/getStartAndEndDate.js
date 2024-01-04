/**
 * Generates a start date and an automatically updating end date based on a starting date and interval.
 *
 * @param {Date} startDate - The starting date.
 * @param {number} [interval=7] - The interval in days to calculate the end date from the start date.
 * @returns {{start: string, end: string}} An object containing the formatted start date and the automatically updating end date in "DD-MM-YYYY" format.
 */

export const generateDates = (startDate, intervel = 7) => {
  /**
   * Formats a date into "DD-MM-YYYY" format.
   *
   * @param {Date} date - The Date object to be formatted.
   * @returns {string} A string representing the formatted date in "DD-MM-YYYY" format.
   */
  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${day}-${month}-${year}`;
  };

  /**
   * Calculates the end date based on the start date and a specified number of days.
   *
   * @param {Date} startDate - The starting date.
   * @param {number} numberOfDays - The number of days to add to the start date.
   * @returns {Date} A Date object representing the calculated end date.
   */
  const getEndDate = (startDate, numberOfDays) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numberOfDays);
    return endDate;
  };

  const startingDate = formatDate(startDate);
  let endDate = getEndDate(startDate, intervel);
  let formattedEnddate = formatDate(endDate);

  // auto update of end date every 24 hours
  setInterval(() => {
    endDate.setDate(endDate.getDate() + 1);
    formattedEnddate = formatDate(endDate);
  }, 86400000);

  return { start: startingDate, end: formattedEnddate };
};
