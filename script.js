// 1. Make computer generate random choice
// 2. Prompt user input
// 3. set result variable with if else statements
// 4. return result
// 5. (Make the game loop 5 times)

const getChoices = () => {
  const computerChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
  const userChoice = prompt("choose one: Rock, Paper, or Scissors")
  let result = "";

  if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors") {
    result = "Incorrect input, Please enter Rock, Paper, or Scissors"
  } else if (computerChoice == "Rock" && userChoice == "Rock" || computerChoice == "Paper" && userChoice == "Paper" || computerChoice == "Scissors" && userChoice == "Scissors") {
    result = "Draw"
  } else if (userChoice == "Rock" && computerChoice == "Scissors" || userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper") {
    result = "You won this round!"
  } else {
    result = "You lost this round!"
  }

  return `The computer chose ${computerChoice} so ` + result
}

// rock => scissors
// scissors => paper
// paper => rock