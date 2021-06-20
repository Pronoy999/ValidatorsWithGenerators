import {DATE_REGEX, EMAIL_REGEX, PHONE_NUMBER_PREFIX} from "./constants";

/**
 * Method to check the validity of the email.
 * @param email: The email to be validated.
 */
export const validateEmail = (email: string) => {
    if (email.length > 0) {
        return email.match(EMAIL_REGEX) !== null;
    }
    return false;
};
/**
 * Method to validate a phone number.
 * @param phoneNumber: the phone number to be validated.
 */
export const validatePhone = (phoneNumber: string) => {
    return phoneNumber.startsWith(PHONE_NUMBER_PREFIX) && phoneNumber.length === 13;
};
/**
 * Method to validate a number.
 * @param number: The Number to be validated.
 */
export const validateNumber = (number: any) => {
    return typeof (number) !== "undefined" && number !== null && Number(number) > -1;
};
/**
 * Method to validate the date.
 * Date format: YYYY-MM-DD
 * @param date: The date to be validated.
 */
export const validateDate = (date: string) => {
    try {
        return date.match(DATE_REGEX) !== null;
    } catch (e) {
        return false;
    }
};
/**
 * Method to validate a date with custom format.
 * @param date: The date to be validated.
 * @param format: The format in which the date to be validated.
 */
export const validateDateWithCustomFormat = (date: string, format: string) => {
    try {
        return date !== null && date.match(format) !== null
    } catch (e) {
        return false;
    }
};
/**
 * Method to validate the undefined data.
 * @param data: the data to be validated.
 */
export const validateUndefined = (data: any) => {
    return (typeof (data) !== "undefined" && data !== null);
};
/**
 * Method to validate an array with atleast 1 element.
 * @param data: The array to be validated.
 */
export const validateArray = (data: any) => {
    return Array.isArray(data) && data.length > 0;
};
/**
 * Method to validate a boolean data.
 * @param data: The data to be validated.
 */
export const validateBoolean = (data: any) => {
    return typeof (data) === "boolean";
};
/**
 * Method to validate a string.
 * @param data: The data to be validated.
 */
export const validateString = (data: any) => {
    return typeof (data) === "string" && data.length > 0;
};
/**
 * Method to validate a character of length exactly 1.
 * @param data: the data to be validated.
 */
export const validateCharacter = (data: any) => {
    return typeof (data) === "string" && data.length === 1;
};
/**
 * Method to validate JSON.
 * @param data: The data to be validated.
 */
export const validateJSON = (data: any) => {
    try {
        return JSON.parse(data);
    } catch (e) {
        return false;
    }
};