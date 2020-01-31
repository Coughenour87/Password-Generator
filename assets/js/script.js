// Assignment Code
var generateBtn = document.querySelector("#generate");

function questions(passLength) {
  console.log('they want a password ' + passLength + ' characters long')
  var special = confirm("Do you want special characters?")
  var number = confirm("Do you want numbers?")
  var upper = confirm("Do you want Uppercase letters?")
  var lower = confirm("Do you want lowercase letters?")
  if (special || number || upper || lower) {
    console.log('success')
    generatePass(passLength, special, number, upper, lower)
  } else {
    alert('Please select at least one character type')
    questions(passLength)
  }
}

function generatePass(passLength, special, number, upper, lower) {

  var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var holder = []
  if (special) {
    holder.push(specialChar)
  }
  if (number) {
    holder.push(lowerCase)
  }
  if (upper) {
    holder.push(upperCase)
  }
  if (lower) {
    holder.push(nums)
  }
  console.log(holder)
  var password = "";
  for (let i = 0; i < passLength; i++) {
    var randomArray = Math.floor(Math.random() * holder.length);
    var randomCharacter = Math.floor(Math.random() * holder[randomArray].length);
    password = password + holder[randomArray][randomCharacter];
    
  }
  console.log(password)
  writePassword(password)
}

function start() {
  // console.log('clicked')
  var passLength = prompt("How long do you want your password to be? Must be a minimun of 8 characters and no longer than 128");
  if (passLength < 129 && passLength > 7) {
    questions(passLength)
  } else {
    alert('Must be a minimun of 8 characters and no longer than 128')
    start()
  }

}


// Write password to the #password input
function writePassword(password) {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", start);
