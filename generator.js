const constants = require('./constants');
const moment = require('moment');
const tz = require('moment-timezone');
const generator = {};
/**
 * Method to parse any data to JSON.
 * @param data: The data to be parsed.
 * @returns {{}} jsonData or {};
 */
generator.generateParsedJSON = (data) => {
   try {
      return JSON.parse(data);
   } catch (e) {
      return {};
   }
};
/**
 * Method to get any random number of any length. If the length
 * is not there then it would assume the length as 8.
 * @param len: the length of the random number required.
 * @returns {string}: the random number.
 */
generator.generateRandomNumber = (len) => {
   const possibleNumbers = "01234567890123456789";
   const validator = require('./validators');
   len = !validator.validateNumber(len) && len > 0 ? len : 8;
   let key = "";
   for (let i = 0; i < len; i++) {
      key += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length));
   }
   return key;
};
/**
 * Method to generate a 4 digit OTP.
 * @returns {number}: the OTP number.
 */
generator.generateOTP = () => {
   return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
};
/**
 * Method to generate the Random Token.
 * @param len: the length of the token required.
 * @returns {string|string}: The random Key.
 */
generator.generateRandomToken = (len) => {
   const possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   const validator = require('./validators');
   len = validator.validateNumber(len) ? len : 16;
   let key = "";
   for (let i = 0; i < len; i++) {
      key += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
   }
   return key;
};
/**
 * Method to get the current date and time separated by space.
 * @returns {string}: The date and time separated by space.
 */
generator.generateCurrentTime = () => {
   return moment.unix(((new Date().getTime()) / 1000))
      .tz(constants.TIME_ZONE).format(constants.DATE_TIME_FORMAT);
};
/**
 * Method to get the current date only.
 * @returns {*}: the current system date.
 */
generator.generateCurrentDateOnly = () => {
   return moment.unix(((new Date().getTime()) / 1000))
      .tz(constants.TIME_ZONE).format(constants.DATE_FORMAT);
};
/**
 * Method to get the next days based on the parameters days.
 * @param aheadDays: The number of days to added to it.
 * @returns {string}: date added with the current date.
 */
generator.generateAheadDate = (aheadDays) => {
   return new moment(generator.generateCurrentTime(), constants.DATE_FORMAT)
      .add(aheadDays, 'days').tz(constants.DATE_TIME_FORMAT).format(constants.DATE_FORMAT);
};
/**
 * Method to get the current month.
 * It returns 0 based index.
 * @returns {number}
 */
generator.generateCurrentMonth = () => {
   return new moment().month();
};
/**
 * Method to get the month name of the current month.
 * @returns {string}
 */
generator.generateCurrentMonthName = () => {
   return new moment().month(generator.generateCurrentMonth()).format("MMMM");
};
/**
 * Method to get the number of days in that particular month of the year.
 * @param year: the year.
 * @param month: The month.
 * @returns {number}: the number of days in that month.
 */
generator.generateDaysInMonth = (year, month) => {
   const date = year + "-" + month;
   return new moment(date, "YYYY-MM").daysInMonth();
};
/**
 * Method to get the current year.
 * @returns {number}
 */
generator.generateCurrentYear = () => {
   return moment().year();
};
/**
 * Method to generate the ahead hours.
 * @param aheadHours: The Ahead hours needed.
 * @returns {string}
 */
generator.generateAheadTime = (aheadHours) => {
   return new moment(generator.generateCurrentTime(), constants.DATE_TIME_FORMAT)
      .add(aheadHours, 'hours').tz(constants.TIME_ZONE).format(constants.DATE_TIME_FORMAT);
};
/**
 * Method to generate the difference between 2 dates.
 * @param startDate: The start date.
 * @param endDate: The end date.
 * @returns {number}: The difference in days.
 */
generator.generateDateDifference = (startDate, endDate) => {
   const start = moment(startDate, constants.DATE_FORMAT);
   const end = moment(endDate, constants.DATE_FORMAT);
   return Math.abs(start.diff(end, 'days'));
};
/**
 * Exporting modules.
 */
module.exports = generator;