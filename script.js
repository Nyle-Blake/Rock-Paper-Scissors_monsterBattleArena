// 1. Make computer generate random choice
// 2. Prompt user input
// 3. set result variable with if else statements
// 4. return result
// 5. (Make the game loop 5 times)

const rockPaperScissors = () => {
  let computerChoice;
  let userChoice;
  let result = "";
  let count = 0;
  let userScore = 0;
  let computerScore = 0;
  let finalResult = "";

  // while count <= 5 play game  

  while(count <= 5) {

    computerChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    userChoice = prompt("choose one: Rock, Paper, or Scissors")

    if (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors") {
      result = "Incorrect input, Please enter Rock, Paper, or Scissors"
    } else if (computerChoice == "Rock" && userChoice == "Rock" || computerChoice == "Paper" && userChoice == "Paper" || computerChoice == "Scissors" && userChoice == "Scissors") {
      result = "This round is a draw"
    } else if (userChoice == "Rock" && computerChoice == "Scissors" || userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper") {
      result = "You won this round!"
      userScore++
    } else {
      result = "You lost this round!"
      computerScore++
    }

    count++
    console.log(`You chose ${userChoice} and the computer chose ${computerChoice} so ${result}`)
  }
    
  if (userScore == computerScore) {
    finalResult = "The game was a draw!"
  } else if (userScore > computerScore) {
    finalResult = "You won the game!"
  } else {
    finalResult = "You lost the game!"
  }

  return `Your score was ${userScore} and the computer's score was ${computerScore}, so ${finalResult}`

}

rockPaperScissors()
// rock => scissors
// scissors => paper
// paper => rock