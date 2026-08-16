////////////////////////////////////////////////////////////////////////////////////////////////////////
// **1. Get the computers choice:
//      - Create a function called getComputerChoice.
//      - Generate a random number.
//      - Map the number to 'Rock', 'Paper', or 'Scissors'.
//      - Return that string.
////////////////////////////////////////////////////////////////////////////////////////////////////////

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let choice = "";

  switch (randomNum) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
    default:
      choice = "Unknown";
  }

  return choice;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// **2. Get the humans choice:
//      - Create function called getHumanChoice.
//      - Prompt user to type 'Rock', 'Paper', or 'Scissors'.
//      - Return the users input.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function getHumanChoice() {
  let choice = prompt("Which do you choose? Rock, Paper, or Scissors?");
  if (choice !== undefined) {
    return choice;
  } else return "";
}

// **3. Keep track of the scores:
//      - Create variables for humanScore and computerScore.
//      - Initialize both to 0.
// **4. Play a single round:
//      - Create function called playRound that takes getComputerChoice and getHumanChoice as arguments.
//      - Make the choices case-sensitive (so 'rock' or 'ROCK' both work).
//      - Compare the choices using conditional logic (if/else statements).
//      - Log the winner message to the console (e.g. "You Lost! Paper beats Rock").
//      - Increment the winners score variable
// **5. Play the full game:
//      - Create function called playGame.
//      - Call playRound inside it 5 times.
//      - Compare final scores and declare the winner.
