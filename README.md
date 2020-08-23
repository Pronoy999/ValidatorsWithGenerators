# ValidatorsAndGenerators
A JavaScript helper library to generate and validate data. 

This is a library to validate data that is coming from the user end or any other source. You can validate all types of data with regex. The generate helps you generate basic dat like current date and difference between 2 dates. We are using [`moment`](https://github.com/moment/moment) in the background. 


## Install the package using npm. 

```javascript
const validators = require('validatorsandgenerators').validators;
const generator=require('validatorsandgenerators').generator;
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
### Various Validators: 

#### All the return types are boolean.

### `validateEmail(emailId)` 

Method to check the validity of the email. It used this ```^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]                                      {2,})$``` REGEX to validate the email id. 

### `validatePhone(phoneNumber)` 
Method to validate a phone number. It validates number starting with +(plus) sign and with country code. The length of the number should be 13. 
 
### `validateNumber(number)` 
 Method to validate a number. It will validate for `undefined` and `null` and will return true for only numbers greater than `-1`. 
