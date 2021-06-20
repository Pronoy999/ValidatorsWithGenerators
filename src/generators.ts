import moment from "moment";
import "moment-timezone";
import {DATE_FORMAT, DATE_TIME_FORMAT, TIME_ZONE} from "./constants";

/**
 * Method to generate Parsed JSON.
 * @param data
 */
export const generateParsedJSON = (data: any) => {
    try {
        return JSON.parse(data);
    } catch (e) {
        return {};
    }
};
/**
 * Method to generate random numbers of a particular length.
 * If the length parameter is not supplied, we assume, length as 8.
 * @param len: The length of random numbers to be generated.
 */
export const generateRandomNumber = (len?: number) => {
    const possibleNumbers: string = "01234567890123456789";
    len = typeof (len) !== "undefined" && len > 0 ? len : 8;
    let key: string = "";
    for (let i = 0; i < len; i++) {
        key += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length));
    }
    return key;
};
/**
 * Method to generate a 4 digit random OTP.
 */
export const generateOTP = () => {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
};
/**
 * Method to generate a random token of a particular length.
 * If length is not defined, the default length of 16 is taken.
 * @param len: The length of the token to be generated.
 */
export const generateRandomToken = (len?: number) => {
    const possibleCharacters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    len = typeof (len) !== "undefined" && len > 0 ? len : 16;
    let key: string = "";
    for (let i = 0; i < len; i++) {
        key += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return key;
}
/**
 * Method to generate the current time.
 */
export const generateCurrentTime = () => {
    return moment.unix(((new Date().getTime())) / 1000).tz(TIME_ZONE).format(DATE_TIME_FORMAT);
};
/**
 * Method to generate the date in YYYY-MM-DD format.
 */
export const generateCurrentDateOnly = () => {
    return moment.unix(((new Date().getTime())) / 1000).tz(TIME_ZONE).format(DATE_FORMAT);
};
/**
 * Method to generate ahead days.
 * @param aheadDays: The number of days ahead.
 */
export const generateAheadDate = (aheadDays: number) => {
    return moment(generateCurrentTime(), DATE_FORMAT).add(aheadDays, 'days')
        .tz(DATE_TIME_FORMAT).format(DATE_FORMAT);
};
/**
 * Method to get the current month. It used 0 based Index.
 */
export const generateCurrentMonthIndex = () => {
    return moment().month();
};
/**
 * Method to generate the current month Name.
 */
export const generateCurrentMonthName = () => {
    return moment().month(generateCurrentMonthIndex()).format("MMMM");
};
/**
 * Method to get the number of days in the month.
 * @param year: The year
 * @param month: The month.
 */
export const generateDaysInMonth = (year: number, month: number) => {
    const date: string = year + "-" + month;
    return moment(date, "YYYY-MM").daysInMonth();
};
/**
 * Method to generate the current year.
 */
export const generateCurrentYear = () => {
    return moment().year();
};
/**
 * Method to generate Ahead time.
 * @param aheadHours: The ahead hours.
 */
export const generateAheadTime = (aheadHours: number) => {
    return moment(generateCurrentTime(), DATE_TIME_FORMAT).add(aheadHours, "hours").tz(TIME_ZONE)
        .format(DATE_TIME_FORMAT);
};
/**
 * Method to generate the difference between 2 dates.
 * @param startDate: The start date.
 * @param endDate: the end date.
 */
export const generateDateDifference = (startDate: string, endDate: string) => {
    const start = moment(startDate, DATE_FORMAT);
    const end = moment(endDate, DATE_FORMAT);
    return Math.abs(start.diff(end, "days"));
};