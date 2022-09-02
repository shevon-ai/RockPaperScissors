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
      game();
      return
  }
  // Returns the result of the round
  return roundResult;
} // End of playRound functionn

/** 
 * The game function plays 5 rounds of the game. It logs the winner 
 * of each round and the overall winner of the game at the end of the 5 rounds
 */
function game() {
  // Game scores and result message
  let playerScore = 0,
    computerScore = 0,
    gameResultMessage;
  // Play 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt(
      `|Round ${
        i + 1
      }| Enter your selection from the options: [Rock, Paper, Scissors]`
    );
    let formattedUserSelection =
      userSelection.charAt(0).toUpperCase() +
      userSelection.slice(1).toLowerCase();
    let { roundResultMessage, roundWinner } = playRound(
      formattedUserSelection,
      computerPlay()
    );
    console.log(`Round ${i + 1}: ${roundResultMessage}`);
    // Checking the winner of each round
    if (roundWinner === "player") {
      playerScore += 1;
    } else if (roundWinner === "computer") {
      computerScore += 1;
    }
  }
  // Checking who is the winner at the end of the 5 rounds
  if (playerScore === computerScore) {
    gameResultMessage = "The game was a tie";
  } else {
    gameResultMessage =
      playerScore > computerScore
        ? `Congratulations! You won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`
        : `Sorry! You lost the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  }
  console.log(`END OF GAME! ${gameResultMessage}`);
} // End of game function
