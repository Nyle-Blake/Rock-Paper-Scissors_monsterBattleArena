// 1. Make computer generate random choice
// 2. Prompt user input
// 3. set result variable with if else statements
// 4. return result
// 5. (Make the game loop until a score = 5)

const buttons = document.querySelectorAll('input')
const result = document.querySelector('.result');

let userScore = 0;
let computerScore = 0;

const disableButtons = () => {
  buttons.forEach(button => {
    button.disabled = true
  })
}; // prevents more input after the game has finished

const getComputerChoice = () => {
  return ['Grass', 'Fire', 'Water'][Math.floor(Math.random() * 3)];
}; // gets random choice from computer

const playGame = (userChoice) => {
  let computerChoice;
  let endResult = "";
  // while count <= 5 play game  

  computerChoice = getComputerChoice();

  if (computerChoice == "Grass" && userChoice == "Grass" || computerChoice == "Fire" && userChoice == "Fire" || computerChoice == "Water" && userChoice == "Water") {
    endResult = "This round is a draw" + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;

  } else if (userChoice == "Grass" && computerChoice == "Water" || userChoice == "Fire" && computerChoice == "Grass" || userChoice == "Water" && computerChoice == "Fire") {
    userScore++
    endResult = "You won this round! " + "<br>" + userChoice + " beats " + computerChoice + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;
      if (userScore == 5) {
        endResult = "You won the battle!" + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;
        disableButtons()
      }

  } else {
    computerScore++
    endResult = "You lost this round! " + "<br>" + computerChoice + " beats " + userChoice + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;
    console.log(computerChoice)
      if (computerScore == 5) {
        endResult = "You lost the battle!" + "<br><br>Userscore: " + userScore + "<br>Computerscore: " + computerScore;
        disableButtons()
      }
  }

  result.innerHTML = endResult;
  return;
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playGame(button.value);
  })
}); // event listener for the input buttons, for player input

// Grass => Water
// Water => Fire
// Fire => Grass