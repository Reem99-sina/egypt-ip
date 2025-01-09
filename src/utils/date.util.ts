/**
 * Modifies a given date by adding or subtracting years, months, and/or days.
 * @param {Date} date - The original date to be modified.
 * @param {{
 *   addYears?: number;
 *   addMonths?: number;
 *   addDays?: number;
 * }} [options] - An optional object containing customization options.
 * @returns {Date} The modified date.
 */
export const modifyDate = (
  date: Date,
  options?: { addYears?: number; addMonths?: number; addDays?: number },
) => {
  if (options?.addYears) {
    date.setFullYear(date.getFullYear() + options.addYears);
  }

  if (options?.addMonths) {
    date.setMonth(date.getMonth() + options.addMonths);
  }

  if (options?.addDays) {
    date.setDate(date.getDate() + options.addDays);
  }

  return date;
};
