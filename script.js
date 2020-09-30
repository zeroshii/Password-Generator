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
  

  //Lowercase
  var hasLower = confirm('Do you want lowercase characters?');
  if (hasLower) charSet.push("abcdefghijklmnopqrstuvwxyz");
  

  //Numeric
  var hasNum = confirm('Do you want numeric characters?');
  if (hasNum) charSet.push("0123456789");


  //Symbols
  var hasSymbols = confirm('Do you want special characters?');
  if (hasSymbols) charSet.push( "!@#$%^&*()");
  

  charSet.join('-')
  console.log(charSet);

  //Checking if at least one character set is selected
  if (charSet == ''){
    alert("You must choose at least one character set.")
  }

}
//slice a random character from each charSet index (string of characters)
//var validLen is password length

function createPassword (){
  for (let i = 0; i < validLen; i++) {
    charSet[i]
    
  }

}
createPassword()


//Generate button to display password

document.getElementById("generate").addEventListener("click", function() {
  document.getElementById("password").value = charSet;
});

/*   for (var i = 0; i < validLen; i++){
    var uniquePass = Math.floor(Math.random() * charSet);
  }

  passwordText.value = password;
 */
