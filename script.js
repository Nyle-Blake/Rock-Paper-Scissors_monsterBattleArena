// 1. Make computer generate random choice
// 2. Prompt user input
// 3. set result variable with if else statements
// 4. return result
// 5. (Make the game loop 5 times)

const buttons = document.querySelectorAll('input')
const result = document.querySelector('.result');

let userScore = 0;
let computerScore = 0;

const disableButtons = () => {
  buttons.forEach(button => {
    button.disabled = true
  })
};

const getComputerChoice = () => {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
};

const playGame = (userChoice) => {
  let computerChoice;
  let endResult = "";
  // while count <= 5 play game  

  computerChoice = getComputerChoice();

  if (computerChoice == "Rock" && userChoice == "Rock" || computerChoice == "Paper" && userChoice == "Paper" || computerChoice == "Scissors" && userChoice == "Scissors") {
    endResult = "This round is a draw" + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;

  } else if (userChoice == "Rock" && computerChoice == "Scissors" || userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper") {
    userScore++
    endResult = "You won this round!" + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;
      if (userScore == 5) {
        endResult = "You won the game!";
        disableButtons()
      }

  } else {
    computerScore++
    endResult = "You lost this round!" + "Userscore: " + userScore + " Computerscore: " + computerScore;
      if (computerScore == 5) {
        endResult = "You lost the game!";
        disableButtons()
      }
  }

  result.innerHTML = endResult;
  console.log(userChoice)
  console.log(computerChoice)
  return;
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playGame(button.value);
  })
});

// rock => scissors
// scissors => paper
// paper => rock