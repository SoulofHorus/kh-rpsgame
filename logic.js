
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.
var game_result;
function play(userChoice){
  var computerChoice = Math.random();
  if(computerChoice < 0.34) {
    computerChoice = "rock";
  }
  else if (computerChoice < 0.67) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }
  game_result = compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}



//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference.
var compare = function(choice1, choice2){
  if (choice1 ===choice2){
    return "The result is a tie! Sucker...";
  }
  else if (choice1 ==="rock") {
    if(choice2 === "scissors")
      return "You're off your rocker... You won!";
    else
      return "Well, you lost to a piece of paper... Try again!";
  }
  else if (choice1 === "paper"){
    if(choice2 === "rock")
      return "You're a ninja! You win!";
    else
      return "Sliced and diced... Try again!";
  }
  else {
    if(choice2 === "paper")
      return "Ohh kill em... You sliced them up! Winner!";
    else
      return "Oof, pounded into the pavement... Try again!";
  }
}
