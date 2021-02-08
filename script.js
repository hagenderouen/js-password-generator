// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds an event listener to generate button
generateBtn.addEventListener("click", writePassword);

// * Main worker function
function generatePassword() {
  var passwordLength = getUserPasswordLength();
  var passwordCharTypes = getUserPasswordCharTypes();

  return createPassword(passwordLength, passwordCharTypes);
}

// Prompts user for password length with validation handling.
function getUserPasswordLength() {
  var passwordLength = prompt("Choose your password length betwen 8 and 128 characters.", "16");
  
  // Validates that the password length is in the specified range and continuously prompts user if length is not valid.
  while (!isLengthValid(passwordLength, 8, 128)) {
    passwordLength = prompt("Try again. Password length must be between 8 and 128 characters.");
  }

  return passwordLength;
  
}

// Prompts user of password character types and returns an array of specified character types.
function getUserPasswordCharTypes() {
  var charTypes = prompt("Choose your password character types.", "lowercase, uppercase, numeric, or special");
  var charTypesResult = [];

  if (!charTypes) {
    return;
  } else {
    charTypes = charTypes.toLowerCase();
  }

  if (charTypes.includes("lowercase")) {
    charTypesResult.push("lowercase");
  }
  
  if (charTypes.includes("uppercase")) {
    charTypesResult.push("uppercase");
  }
  
  if (charTypes.includes("numeric")) {
    charTypesResult.push("numeric");
  }
  
  if (charTypes.includes("special")) {
    charTypesResult.push("special");
  }

  return charTypesResult;

}

// Creates a password from numeric length and character types array. Defaults to lower and uppercase char types.
function createPassword(charLength, charTypes = ["lowercase", "uppercase"]) {
  var password = "";

  for (var i = 0; i < charLength; i++) {
    var charType = charTypes[getRandomNumber(0, charTypes.length)];
    var randChar = getRandomChar(charType);

    password += randChar;
  }

  return password;
}

// Gets a random character from a character type (lowercase, uppercase, special, numeric).
function getRandomChar(charType) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
  var randChar;

  switch(charType) {
    case "lowercase":
      var rand = getRandomNumber(0, 26);
      randChar = alphabet[rand].toLowerCase();
      break;
    case "uppercase":
      var rand = getRandomNumber(0, 26);
      randChar = alphabet[rand].toUpperCase();
      break;
    case "special":
      var rand = getRandomNumber(0, 30);
      randChar = specialChars[rand];
      break;
    case "numeric":
      randChar = getRandomNumber(0, 9);
      break;
    default:
      var rand = getRandomNumber(0, 26);
      randChar = alphabet[rand].toLowerCase();
  }

  return randChar;
}

// * Utility Functions
// Checks if a number is between min and max values 
function isLengthValid(input, min, max) {
  if (!input) { 
    return false;
  } else if (input >= min && input <= max) {
    return true;
  } else {
    return false;
  }  
}
// Returns random number in range included
function getRandomNumber(min, max) {
  return Math.floor((Math.random() * max) + min);
}

// *
