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
  // validate password length.
  // prompt user for speacial chars (lowercase, uppercase, numeric, and/or special characters).
  // validate special chars.
  // return password
}

function getUserPasswordRequirements() {
  var passwordLength = prompt("Specify password length betwen 8 and 128 characters.", "16");
  
  
}
