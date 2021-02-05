// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = getUserPasswordLength();
  var passwordCombos = getUserPasswordCombos();

  return createPassword(passwordLength, passwordCombos);
}

// Prompts user for password length with specified min and max characters.
function getUserPasswordLength() {
  var passwordLengthInput = prompt("Specify password length betwen 8 and 128 characters.", "16");
  
  while (!lengthIsValid(passwordLengthInput, 8, 128)) {
    passwordLengthInput = prompt("Try again. Password length must be between 8 and 128 characters.");
  }

  return passwordLengthInput;
  
}

// Prompts user of password combinations. Returns an array of user specified character types.
function getUserPasswordCombos() {
  var combosInput = prompt("Specify use of password combinations", "lowercase, uppercase, numeric, or special");
  var combos = [];

  if (!combosInput) {
    return combos;
  } else {
    combosInput = combosInput.toLowerCase();
  }

  if (combosInput.includes("lowercase")) {
    combos.push("lowercase");
  }
  
  if (combosInput.includes("uppercase")) {
    combos.push("uppercase");
  }
  
  if (combosInput.includes("numeric")) {
    combos.push("numeric");
  }
  
  if (combosInput.includes("special")) {
    combos.push("special");
  }

  return combos;

}

// Creates a password from numeric length and combos array. Defaults lower and uppercase chars if combos is empty.
function createPassword(charLength, combosArray = ["lowercase", "uppercase"]) {
  var password = "";

  for (var i = 0; i < charLength; i++) {
    var charType = combosArray[getRandomNumber(0, combosArray.length)];
    var randChar = getRandomChar(charType);

    password += randChar;
  }

  return password;
}

// Gets a random character from charType (lowercase, uppercase, special, numeric)
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
// Checks if an input is between min and max values 
function lengthIsValid(input, min, max) {
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
