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
    window.alert("not valid");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password Length must be between 8 and 128 characters");
    return;
  }
  var userWantsLowercase = window.confirm("would you lie to include lowercase password in your password?")
  var userWantsUppercase = window.confirm("would you to include Uppercase letters in your password?")
  var userWantsNumber = window.confirm("would you like to include number in your line?")
  var userWantsSymbols = window.confirm("would you like symbols in your password")

  var lowercaseList = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j", "k" , "l" , "m" , "N" , "o" , "p" , "q" , "r" ,"s" , "t" , "u" , "v" , "W" , "x" , "y", "z"]
} var UppercaseList = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J", "K" , "L" , "m" , "N" , "O" , "P" , "Q" , "R" ,"S" , "Y" , "U" , "v" , "W" , "X" , "Y", "Z"]
  var numbersList = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"]
  var symbolList = ["!" , "@" , "£" , "$" , "%" , "^" , "*" , "," , "?"]

  var symbolList = ["@" , "'"]

  var optionCart = []
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
