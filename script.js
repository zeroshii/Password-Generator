var passwordLen= prompt('How long do you want your password to be?');

var validLen = parseInt(passwordLen);

//Checking for valid int input
if ( !validLen || validLen < 8 || validLen > 128){
  alert("Sorry, please choose a password length from 8-128.");
  
}
else{
  console.log(validLen);
  var charSet = [];

  //Uppercase
  var hasUpper = confirm('Do you want uppercase characters?');
  if (hasUpper) charSet.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  console.log(charSet);

  //Lowercase
  var hasLower = confirm('Do you want lowercase characters?');
  if (hasLower) charSet.push("abcdefghijklmnopqrstuvwxyz");
  console.log(charSet);

  //Numeric
  var hasNum = confirm('Do you want numeric characters?');
  if (hasNum) charSet.push("0123456789");
  console.log(charSet);

  //Symbols
  var hasSymbols = confirm('Do you want special characters?');
  if (hasSymbols) charSet.push( "!@#$%^&*()");
  console.log(charSet);

  console.log(charSet.join(''));

  //Checking if at least one character set is selected
  if (charSet == ''){
    alert("You must choose at least one character set.")
  }



}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (var i = 0; i < validLen; i++){
    var uniquePass = Math.floor(Math.random() * charSet);
  }

  passwordText.value = password;

}

// Add event listener to generate button
function generatePassword(){
  generateBtn.addEventListener("click", writePassword);

}
