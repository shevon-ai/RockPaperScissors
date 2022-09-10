/*          DOM ELEMENTS TO BE MANIPULATED          */
const GAME_OPTIONS = document.querySelectorAll(".options");
const OPTIONS_CONTAINER = document.querySelector("#options-container");
const START_GAME = document.querySelector("#play-game");
const END_GAME = document.querySelector("#end-game");
const RESULTS_PAYNE = document.querySelector("#results-payne");

/*          INITIALIZATION OF VARIABLES          */
let playerScore = 0,
  computerScore = 0,
  counter = 0;

/**
 * THIS IS AN IMPLEMENTATION OF THE GAME COMMONLY KNOWN
 * AS ROCK PAPER SCISSORS. IT IS PLAYED IN THE BROWSER'S
 * CONSOLE.
 */

/**
 * @returns the computer's play (Rock, Paper, or Sciessors)
 */
function computerPlay() {
  let playerOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * playerOptions.length);
  return playerOptions[randomNumber];
} // End of computerPlay function

/**
 * @param {the user's play} playerSelection
 * @param {the computer's play} computerSelection
 * @returns the winner of the round
 */
function playRound(playerSelection, computerSelection) {
  // Result for the round is stored in an object
  const roundResult = {
    roundResultMessage: "",
    roundWinner: "",
  };
  switch (playerSelection) {
    // Case where the player's selection is Rock
    case "Rock":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      }
      break;
    // Case where the player's selection is Paper
    case "Paper":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      }
      break;
    // Case where the player's selection is Scissors
    case "Scissors":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `No Winner! You both played ${playerSelection}`;
      }
      break;
    // When the player enters none of the expected options
    default:
      console.log("Please play a valid option!");
  }
  // Returns the result of the round
  return roundResult;
} // End of playRound functionn

/**
 * Starts the game 
 */
function handleStartGame() {
  START_GAME.classList.add("hidden");
  END_GAME.classList.remove("hidden");
  RESULTS_PAYNE.classList.remove("hidden");
  OPTIONS_CONTAINER.classList.remove("hidden");
  Array.prototype.forEach.call(GAME_OPTIONS, (option) => {
    option.classList.remove("hidden");
  });
}

/**
 * Ends the gmae
 */
function handleEndGame() {
  START_GAME.classList.remove("hidden");
  END_GAME.classList.add("hidden");
  RESULTS_PAYNE.classList.add("hidden");
  OPTIONS_CONTAINER.classList.add("hidden");
  Array.prototype.forEach.call(GAME_OPTIONS, (option) => {
    option.classList.add("hidden");
  });
}

/**
 * 
 * @param {The player's optiion (Rock, Paper or Scissors)} play 
 * Updates the score depending on who wins
 */
function handleOptions(play) {
  counter++;
  let { roundResultMessage, roundWinner } = playRound(play, computerPlay());
  console.log(play);
  if (roundWinner === "player") {
    playerScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }
  RESULTS_PAYNE.innerHTML = `<h2>Round ${counter}: ${roundResultMessage}</h2>
                              <h2>Player Score: ${playerScore} | Computer Score: ${computerScore}</h2>`;
  if (playerScore === 5) {
    RESULTS_PAYNE.innerHTML += `<h2>Congrats Player! You Won the game!</h2>
                                <h2>Player Score: ${playerScore} Computer Score: ${computerScore}</h2>`;
    Array.prototype.forEach.call(GAME_OPTIONS, (option) => {
      option.classList.add("hidden");
    });
  } else if (computerScore === 5) {
    RESULTS_PAYNE.innerHTML += `<h2>Sorry Player, You lost the game!</h2>
                                <h2>Player Score: ${playerScore} Computer Score: ${computerScore}</h2></h2>`;
    Array.prototype.forEach.call(GAME_OPTIONS, (option) => {
      option.classList.add("hidden");
    });
  }
}

/*          ADDING EVENT LISTENERS TO DOM ELEMENTS         */
START_GAME.addEventListener("click", handleStartGame); // START GAME BUTTON
// GAME OPTIONS BUTTONS
Array.prototype.forEach.call(GAME_OPTIONS, (option) => {
  option.addEventListener("click", function () {
    handleOptions(option.value);
  });
});

END_GAME.addEventListener("click", handleEndGame); // END GAME BUTTON
/**
 * The game function plays 5 rounds of the game. It logs the winner
 * of each round and the overall winner of the game at the end of the 5 rounds
 */
// function game() {
//   // Game scores and result message
//   let playerScore = 0,
//     computerScore = 0,
//     gameResultMessage;
//   // Play 5 rounds of the game
//   for (let i = 0; i < 5; i++) {
//     let userSelection = prompt(
//       `|Round ${
//         i + 1
//       }| Enter your selection from the options: [Rock, Paper, Scissors]`
//     );
//     let formattedUserSelection =
//       userSelection.charAt(0).toUpperCase() +
//       userSelection.slice(1).toLowerCase();
//     let { roundResultMessage, roundWinner } = playRound(
//       formattedUserSelection,
//       computerPlay()
//     );
//     // Checks if it was a valid round and restarts the game if it wasn't
//     if (roundResultMessage === "" && roundWinner === ""){
//       i--;
//     } else{
//       console.log(`Round ${i + 1}: ${roundResultMessage}`);
//       // Checking the winner of each round
//       if (roundWinner === "player") {
//         playerScore += 1;
//       } else if (roundWinner === "computer") {
//         computerScore += 1;
//       }
//     }
//   }
//   // Checking who is the winner at the end of the 5 rounds
//   if (playerScore === computerScore) {
//     gameResultMessage = "The game was a tie";
//   } else {
//     gameResultMessage =
//       playerScore > computerScore
//         ? `Congratulations! You won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`
//         : `Sorry! You lost the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
//   }
//   console.log(`END OF GAME! ${gameResultMessage}`);
// } // End of game function
