var ans = "answer";
var guesses = [];
var lettersGuessed = [];
var fails = 10;
var wins = 0;

for(var i = 0; i<ans.length; i++){
    lettersGuessed[i] = false;
}

game.textContent = "Wins: 0 "
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
  // Determines which key was pressed.
  var userGuess = event.key.toLowerCase();
  // Alerts the key the user pressed (userGuess).
  alert("User guess: " + userGuess);

  guesses.push(userGuess);

  for(var i = 0; i < ans.length; i++){
      if(ans[i]===userGuess){
        lettersGuessed[i] = true;
      }
  }

  game.textContent = "Wins: " + wins;
}