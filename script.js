var passwordLen= prompt('How long do you want your password to be?');

var validLen = parseInt(passwordLen);

//Checking for valid int input
if ( !validLen || validLen < 8 || validLen > 128){
  alert("Sorry, please choose a password length from 8-128.");
}
else{

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

  var criteria = charSet.join('')

  //Checking if at least one character set is selected

  if (charSet == ''){
    alert("You must choose at least one character set.")
  }

}

//Generate unique password and then display to textarea

function createPassword (){
  var uniquePass = ''
  for (let i = 0; i < validLen; i++) {
    uniquePass += criteria.charAt(Math.floor(Math.random() * criteria.length))
  }
  
  document.getElementById("generate").addEventListener("click", function() {
  document.getElementById("password").value = uniquePass;
  });
} 
createPassword()






