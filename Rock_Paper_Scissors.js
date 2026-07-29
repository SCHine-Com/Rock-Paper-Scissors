const humanScore = 0;
const computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
import readline from "node:readline";
const rl = readline.createInterface({
input: process.stdin,
output:process.stdout
});


function getRandomInt(max)
{   
    return Math.floor(Math.random() * max);
}

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
console.log(getComputerChoice())

function getHumanChoice()
{
    let choice = textbox.prompt("Rock, Paper, Scissors?").toUpperCase();
    
rl.close();
    if (choice === "ROCK")
    {
        return "Rock";
    }
    else if (choice === "SCISSORS")
    {
        return "Scissors";
    }
    else if (choice === "PAPER")
    {  
        return "Paper";
    }
    else 
    {
        return "Try Again";
    }

}

function playRound(humanChoice, computerChoice)
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "ROCK" && computerChoice === "Paper")
    {   
        return "You Lose Buddy.";
        computerScore = +1;
    }
    else if (humanChoice === "PAPER" && computerChoice === "Rock")
    {
        return "You win I guess.";
        humanScore = +1;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "Paper")
    {
        return "You win I guess.";
        humanScore = +1;
    }
    else if (humanChoice === "ROCK" && computerChoice === "Scissors")
    {
        return "You win I guess.";
        humanScore = +1;
    }
    else if (humanChoice === "PAPER" && computerChoice === "Scissors")
    {
        return "You lose Buddy.";
        computerScore = +1;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "Rock")
    {
        return "You lose Buddy.";
        computerScore = +1;
    }
    else 
    {
        return "Try Again";
    }

} 

function playGame()
{
    console.log(playRound(humanChoice, ComputerChoice))
    console.log(playRound(humanChoice, ComputerChoice))
    console.log(playRound(humanChoice, ComputerChoice))
    console.log(playRound(humanChoice, ComputerChoice))
    console.log(playRound(humanChoice, ComputerChoice))

    if (computerScore > humanScore) 
    {
        "You lost. Computer Wins.";
    }
    else if (humanScore > computerScore)
    {
        "You won. Computer Lost.";
    }
    else
    {
        "Glitch in the system.";
    }
}
