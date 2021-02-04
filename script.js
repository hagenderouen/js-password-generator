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
  // prompt user for password length between 8 and 128 chars.
  var passwordLength = getUserPasswordLength();
  console.log(`Password length: ${passwordLength}`);
  // prompt user for password combinations (lowercase, uppercase, numeric, and/or special characters).
  var passwordCombos = getUserPasswordCombos();
  console.log("Password combos:");
  console.log(passwordCombos);
  // return password combination
  return "Password#1" // ! for testing purposes
}

// Prompts user for password length with specified min and max characters.
function getUserPasswordLength() {
  var passwordLengthInput = prompt("Specify password length betwen 8 and 128 characters.", "16");
  
  while (!passwordLengthIsValid(passwordLengthInput, 8, 128)) {
    passwordLengthInput = prompt("Try again. Password length must be between 8 and 128 characters.");
  }

  return passwordLengthInput;
  
}

// Prompts user of password combinations. Checks user input and returns array based on input.
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

// * Utility Functions
// Checks if an input is between min and max values 
function passwordLengthIsValid(input, min, max) {
  if (!input) { // if the input is empty or null
    return false;
  } else if (input >= min && input <= max) {
    return true;
  } else {
    return false;
  }  
}

// *
