var ansList = [
  "predator",
  "hellraiser", 
  "chucky"
];
var ans = "";
var displayAns = [];
var guessCheck = false;
var guesses = [];
var lettersGuessed = [];
var livescount = 10;
var wins = 0;
var gameWon = false;
var game = document.getElementById("game");
var answer = document.getElementById("answer");
var lives = document.getElementById("lives");
var resetDoc = document.getElementById("reset");
var guessDoc = document.getElementById("guess");
var jumbo = document.getElementById("jumbo");




function reset(){
  debugger;
  livescount = 10;
  ans = ansList[Math.floor(Math.random()*ansList.length)];
  wins = 0;
  //clear arrays
  guesses.length = 0;
  displayAns.length = 0;
  lettersGuessed.length = 0;
  //repopulate lettersGuessed with falses
  for(var i = 0; i<ans.length; i++){
    lettersGuessed[i] = false;
  }
  //repopulate displayAns with blanks
  for(var i = 0; i<ans.length; i++){
    displayAns[i] = '_';
  }
  game.textContent = "Press any key to start guessing";
  answer.textContent = "Movie Villain: "+ displayAns;
  lives.textContent = "Your Guesses: "+ livescount;
  guessDoc.textContent = "Wrong Guesses: "+ guesses;
}

function youWin(){
  jumbo.src = "assets/images/"+ans+".jpg";
  jumbo.style.display = "block";
  jumbo.style.visibility = "visible";
  game.textContent = "You Won! Press a key to keep going."

  guesses.length = 0;
  displayAns.length = 0;
  lettersGuessed.length = 0;
  wins++;
  ans = ansList[Math.floor(Math.random()*ansList.length)];
  for(var i = 0; i<ans.length; i++){
    lettersGuessed[i] = false;
  }
  for(var i = 0; i<ans.length; i++){
    displayAns[i] = '_';
  }

}

function isTrue(testTrue){
  return testTrue===true;
}


resetDoc.addEventListener("click", reset());
reset();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
  //ends game when lives hits 0
  jumbo.style.display = "none";
if((livescount!==0)&&(!(guesses.includes(event.key)))){
  // Determines which key was pressed.
  var userGuess = event.key.toLowerCase();

  guessCheck = false;

  for(var i = 0; i < ans.length; i++){
      if(ans[i]===userGuess){
        lettersGuessed[i] = true;
        displayAns[i] = userGuess;
        guessCheck = true;
      }
  }
  if(guessCheck === false){
      livescount--;
      guesses.push(userGuess);
  }

  game.textContent = "Wins: " + wins;
  answer.textContent = "Movie Villain: "+ displayAns;
  lives.textContent = "Your Guesses: "+ livescount;
  guessDoc.textContent = "Wrong Guesses: "+ guesses;

  if(lettersGuessed.every(isTrue)){
    youWin();
  }
}
else if(livescount ===0)
{
  game.innerHTML = "<h1>Too bad, Try again</h1><br>"+
                    "<h1>Click Reset to try again</h1>";
}
}