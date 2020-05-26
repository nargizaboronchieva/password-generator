  // The Password generator will provide a password with 8-128 characters based on criteria the user specifies. 
  //Assignment Code + Event Listener to prompt questions when button pushed 
  document.querySelector("#generate").addEventListener ("click",writePassword); 
  // Various Arrays 
  var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ; 
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y" , "Z" ] ; 

  // Variable Declaration 
  var confirmLength = "";
  var confirmSymbols;
  var confirmNumbers;
  var confirmUpperCase;
  var confirmLowerCase;
  // Prompt to confirm how many characters the user would like in their password 
  function generatePassword ( ) { 
    var confirmLength = (prompt ("How many characters would you like your password to contain?")); 
    // Loop if answer is outside the parameters 
    while (confirmLength <= 7 || confirmLength >= 129 ) { 
    alert ("Password length must be between 8-128 characters. Try again" ) ; 
    var confirmLength = (prompt ("How many characters would you like your password to contain?")) ; 
    } 
    // Repeat back how many characters the user will have 
    alert (`Your password will have ${confirmLength} characters`) ; 
    // Determine parameters of password 
    var confirmSymbols = confirm ("Confirm if you would like to include symbols"); 
    var confirmNumbers = confirm ("Confirm if you would like to include numeric characters"); 
    var confirmLowerCase = confirm ( "Confirm if you would like to include lowercase characters"); 
    var confirmUpperCase = confirm ( "Confirm if you would like to include uppercase characters"); 
    // Loop if answer is outside the parameters 
      while ( confirmUpperCase === false && confirmLowerCase === false && confirmSymbols === false && confirmNumbers === false ) { 
      alert ( "You have to choose at lease one parameter" ) ; 
      var confirmSymbols = confirm ( "Confirm if you would like to include special characters"); 
      var confirmNumbers = confirm ( "Confirm if you would like to include numeric characters"); 
      var confirmLowerCase = confirm ("Confirm if you would like to include lowercase characters"); 
      var confirmUpperCase = confirm ("Confirm if you would like to include uppercase characters"); 
  } 
  // Assign an action to the password parameters.
  var passwordCharacters = [ ] 
  if (confirmSymbols) { 
  passwordCharacters = passwordCharacters.concat(symbols) 
  } 
  if (confirmNumbers) { 
  passwordCharacters = passwordCharacters.concat(numbers) 
  } 
  if (confirmLowerCase) { 
  passwordCharacters = passwordCharacters.concat(lowercase) 
  } 
  if ( confirmUpperCase) { 
  passwordCharacters = passwordCharacters.concat(uppercase) 
  } 
  console.log (passwordCharacters) 
  // Empty string to be filled based on for loop selecting random characters from the array 
  var randomPassword = "" 
  for (var i = 0 ; i < confirmLength ; i ++) { 
  randomPassword = randomPassword + passwordCharacters [Math.floor(Math.random( ) * passwordCharacters.length)] ; 
  console.log(randomPassword) 
  } 
  return randomPassword; 
  } 
  // Write password to the #password input 
  function writePassword( ) { 
  var password = generatePassword( ) ; 
  var passwordText = document.querySelector("#password") ; 
  passwordText.value = password ; 
  } 