var passwordLen= prompt('How long do you want your password to be?');
var hasUpper = confirm('Do you want uppercase characters?');
var hasLower = confirm('Do you want lowercase characters?');
var hasNum = confirm('Do you want numeric characters?');
var hasSymbols = confirm('Do you want special characters?');

var charSet = '';
if (hasUpper) charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (hasLower) charSet = "abcdefghijklmnopqrstuvwxyz";
if (hasNum) charSet = "0123456789";
if (hasSymbols) charSet = "!@#$%^&*()"


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
