let humanScore = 0;
let computerScore = 0;

let humanScoreDisplay = document.querySelector("#human_score");
let computerScoreDisplay = document.querySelector("#computer_score");

const humanSelection = "string";
const computerSelection = "string";
const Rock = document.querySelector("#Rock");
const Scissors = document.querySelector("#Scissors");
const Paper = document.querySelector("#Paper");

//Function that generates a random integer between 0 and max. Function used for computer Choice
function getRandomInt(max)
{   
    return Math.floor(Math.random() * max);
}

//Function that randomly generates the computer's choice of rock, paper, or scissors
function getComputerChoice()
{   
    let random = getRandomInt(3)
    if (random === 0)
    {
       return "Scissors";
    }
    else if (random === 1)
    {
        return "Rock";
    }
    else 
    {
        return "Paper";
    }

}
//Function that takes the human choice and computer choice and plays a round of rock paper scissors
    function humanChoice()
{  
    Rock.addEventListener("click", function() {
    let humanSelection = "Rock";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
  })

  Scissors.addEventListener("click", function() {
    let humanSelection = "Scissors";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
  })

    Paper.addEventListener("click", function() {  
    let humanSelection = "Paper";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
}) 
}
humanChoice();

//function that decides the winner of each round and updates the score accordingly
function playRound(humanSelection, computerSelection)
{   const div = document.createElement("div");
    div.style.paddingLeft = "500px";
    div.style.color = "green";
    document.body.appendChild(div);

    if (humanSelection === "Rock" && computerSelection === "Paper")
    {   
        div.textContent = "You lose Buddy.";
        computerScore += 1;
    }
    else if (humanSelection === "Paper" && computerSelection === "Rock")
    {
        div.textContent = "You win I guess.";
        humanScore += 1;
    }
    else if (humanSelection === "Scissors" && computerSelection === "Paper")
    {
        div.textContent = "You win I guess.";
        humanScore += 1;
    }
    else if (humanSelection === "Rock" && computerSelection === "Scissors")
    {
        div.textContent = "You win I guess.";
        humanScore += 1;
    }
    else if (humanSelection === "Paper" && computerSelection === "Scissors")
    {
        div.textContent = "You lose Buddy.";
        computerScore += 1;
    }
    else if (humanSelection === "Scissors" && computerSelection === "Rock")
    {
        div.textContent = "You lose Buddy.";
        computerScore += 1;
    }
    else 
    {
        div.textContent = "Try Again";
    }

    // Update the score onto the screen
    humanScoreDisplay.textContent = `Player: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5)
    {
        playGame(humanScore, computerScore);
    }

} 

// Function to play the game and display the winner when either player reaches 5 points
function playGame(humanScore, computerScore)
{   
    const div = document.createElement("div");

    if (computerScore === 5) 
    {
        div.textContent = "You lost. Computer Wins.";
        computerScore = 0;
        humanScore = 0;
    }
    else if (humanScore === 5)
    {
        div.textContent = "You won. Computer Lost.";   
        computerScore = 0;
        humanScore = 0;
    }
    else
    {
        div.textContent = "Glitch in the system.";  
    }
    document.body.appendChild(div);
}
