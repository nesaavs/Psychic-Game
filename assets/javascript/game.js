// Data array to hold possible outcomes
var letters = [
  "a", "b", "c", 
  "d", "e", "f", 
  "g", "h", "i"
  ];
  
  // guessedLetters array will hold the key strokes
  var guessedLetters = [];
  
  /* lettersToGuess will hold the selected letter
  ** first value will be null **/ 
  var letterToGuess = null;
  
  // guessesLeft is our counter
  var guessesLeft = 5;
  
  // Track of the results of the game
  var wins = 0;
  var losses = 0;
  
  /* Now the important stuff
  ** We update our game and
  ** write it back to the html document
  ** where we use the id of the element 
  ** on the html page.
  ** document.querySelector("#guesses-left").innerHTML = guessesLeft;
  ** guesses-left is the id of the spam for Guesses Left
  */
  var updateGuessesLeft = function () {
  
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };
  
  var updateLetterToGuess = function () {
    // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterToGuess);
  
  };
  
  var updateGuessesSoFar = function () {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas.
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
  };
  
  // Function will be called when we reset everything
  var resetGame = function () {
    guessesLeft = 5;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  };
  
  // Execute on page load.
  updateLetterToGuess();
  updateGuessesLeft();
  
  // This function will capture the keyboard clicks.
  document.onkeydown = function (event) {
    // It's going to reduce the guesses by one
    guessesLeft--;
  
    // Lowercase the letter
    var letter = String.fromCharCode(event.which).toLowerCase();
  
    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);
  
    // Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();
  
    // We'll check if there's a match.
    if (letter === letterToGuess) {
  
      // If there is then we win and we'll update the HTML to display the win.
      alert("you are a winner");
    wins++;
      document.querySelector("#wins").innerHTML = wins;
  
      // Then we'll reset the game
      resetGame();
    }
  
    // If we are out of guesses...
    if (guessesLeft === 0) {
  
      // Then we will loss and we'll update the HTML to display the loss.
      losses++;
      document.querySelector("#losses").innerHTML = losses;
  
      // Then we'll call the reset.
      resetGame();
    }
  
  };