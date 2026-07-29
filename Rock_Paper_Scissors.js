const humanScore = 0;
const computerScore = 0;

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
    let choice = prompt("Rock, Paper, Scissors?").toUpperCase();
    
    
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
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice)
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "ROCK" && computerChoice === "Paper")
    {
        return "You Lose Buddy.";
    }
    else if (humanChoice === "PAPER" && computerChoice === "Rock")
    {
        return "You win I guess.";
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "Paper")
    {
        return "You win I guess.";
    }
    else if (humanChoice === "ROCK" && computerChoice === "Scissors")
    {
        return "You win I guess.";
    }
    else if (humanChoice === "PAPER" && computerChoice === "Scissors")
    {
        return "You lose Buddy.";
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "Rock")
    {
        return "You lose Buddy.";
    }
}

