<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

![](https://badgen.net/github/license/manuelbieh/geolib)

# ValidatorsWithGenerators
A JavaScript helper library to generate and validate data. 

This is a library to validate data that is coming from the user end or any other source. You can validate all types of data with regex. The generate helps you generate basic dat like current date and difference between 2 dates. We are using [`moment`](https://github.com/moment/moment) in the background. 


## Install the package using npm. 
```npm install validatorswithgenerators```

```javascript
const validators = require('validatorswithgenerators').validators;
const generator=require('validatorswithgenerators').generator;
```
### Sample use. 

```javascript
const data = "Hello World";
if(validators.validateString(data)){
  console.log("Valid Data!");
}else{
  console.log("Invalid!");
} 
```

## Table of Contents: 
* [Validators documentation](#various-validators)
* [Generators documentation](#various-generators)

## Various-Validators: 

`All the return types are boolean.`

### `validateEmail(emailId)` 
```javascript
validateEmail(emailId)
```
Method to check the validity of the email. It used this ```^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]                                      {2,})$``` REGEX to validate the email id. 

### `validatePhone(phoneNumber)` 
```javascript
validatePhone(phoneNumber)
```

Method to validate a phone number. It validates number starting with +(plus) sign and with country code. The length of the number should be 13. 
 
### `validateNumber(number)` 
```javascript
validateNumber(number)
```

Method to validate a number. It will validate for `undefined` and `null` and will return true for only numbers greater than `-1`. 
 
 ### `validateDate(date)` 
 ```javascript
validateDate(date)
```

 Method to validate the date. It will validate for dates in the format of `YYYY-MM-DD` only. For others it will return `false`. It will match the date with this regex `[0-9]{4}-[0-9]{2}-[0-9]{2}`
 
### `validateUndefined(data)` 
```javascript
validateUndefined(data)
```

Method to validate whether the data is undefined or null. 

### `validateArray(data)` 
```javascript
validateArray(data)
```
Method to validate whether the data is a valid array or not. It uses `Array.isArray()` internally. It also checks whether the array is empty or not. A valid array is a non-empty array. 

### `validateBoolean(data)`
```javascript
validateBoolean(data)
```

Method to validate whether the type of data is boolean or not. 

### `validateString(data)`
```javascript
validateString(data)
```

Method to validate whether the data is a valid non-empty string or not. 

### `validateCharacter(data)`
```javascript
validateCharacter(data)
```

Method to validate whether the data is a valid character or not. Ideal for checking Gender data as `'M' or 'F'`

### `validateJSON(data)`
```javascript
validateJSON(data)
```

Method to validate whether the data is valid JSON object or not. 

## Various-Generators: 

### `generateParsedJSON(data)`
```javascript
generateParsedJSON(data)
```
##### Return type `{}`.
Method to convert a string data to a valid JSON. It internally also checks for validity of the JSON structure.

### `generateRandomNumber(length)` 
```javascript
generateRandomNumber(length)
```
##### Return type `integer`. 
Method to generate a random number based on a specific `length`. If the length parameter is not specified it generates a random number of length `8`. 

### `generateOTP()`
```javascript
generateOTP()
```
##### Return type `integer`
Method to generate an OTP of 4 digit length. You can also use **[generateRandomNumber](#generaterandomnumberlength)**. 

### `generateRandomToken(length)`
```javascript
generateRandomToken(length)
```
##### Return type `string` 
Method to generate a random token of a specified `length`. It can be used to generate custom tokens for various use cases. The token might include any valid number or any english lower case character or any english upper case character. If the length is not speicified it generates a token of `16` characters. 

### `generateCurrentTime()` 
```javascript
generateCurrentTime()
```
##### Return Type `string` eg: '2020-09-09 19:00:12' 
Method to generate the current date and time. It internally uses the [moment](https://github.com/moment/moment) library. 
The date and the time are seperated with a `space`. 
The time zone is `Asia/Kolkata`. 

### `generateCurrentDateOnly()` 
```javascript
generateCurrentDateOnly()
```
##### Return type `string` eg: '2020-09-09' 
Method to generate the current date only. It will only return the date and not the time. 
The time zone is `Asia/Kolkata`. 

### `generateAheadDate(aheadDays)`
```javascript
generateAheadDate(aheadDays)
```
##### Return type `string` 
Method to generate the date some days ahead of the current date. If the current date is `2020-09-09` and the `aheadDays` is 2, then the result will be `2020-09-11`. It automatically handles the month end senarios. 

### `generateCurrentMonth()`
```javascript
generateCurrentMonth()
```
##### Return type `integer` 
Method to generate the current month index. It returns the 0 based index. eg: *`Januray: 0, February: 1`*


### `generateCurrentMonthName()`
```javascript
generateCurrentMonthName()
```
##### Return type `string` 
Method to generate the current month in string format and not index or number. 

### `generateDaysInMonth(year,month)
```javascript
generateDaysInMonth(2020,09) // 09: for September.
```
##### Return type `integer` 
Method to generate the number of days in a `month` for a specified `year`. 

### `generateCurrentYear()`
```javascript
generateCurrentYear()
```
##### Return type: `integer` 
Method to generate the current year in number. 

### `generateDateDifference()`

```javascript
generateDateDifference('2020-09-09','2020-10-09');
```
##### Return type: `integer` 
Method to get the difference between 2 dates in days. 



