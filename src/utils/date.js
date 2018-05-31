/**
 * check year interval (1000-2999)
 * @param {number|string} year
 * @returns {boolean}
 */
export const isValidYear = year => /^[1-2][0-9]{3}$/.test(year);

/**
 * check month interval (1-12, 01-12)
 * @param {number|string} month
 * @returns {boolean}
 */
export const isValidMonth = month => /^0?[0-9]$|^1[0-2]$/.test(month);

/**
 * check if date is before now
 * @param {date} date
 * @returns {boolean}
 */
export const isPastDate = date => {
  return date < new Date();
}
