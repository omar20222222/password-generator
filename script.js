// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = prompt("hello");
  console.log(userInput);
}

function generatePassword() {
  var userInput = prompt("how long would you want your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    alert("This is not a number");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password Length must be between 8 and 128 characters");
    return;
  }
  var userWantsNumbers = confirm(
    "would like to include numbers in your password"
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
