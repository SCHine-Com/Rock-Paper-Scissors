const humanScore = 0;
const computerScore = 0;
const humanSelection = "string";
const computerSelection = "string";
const Rock = document.querySelector("#Rock");
const Scissors = document.querySelector("#Scissors");
const Paper = document.querySelector("#Paper");

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
    function humanChoice()
{  
    Rock.addEventListener("click", function() {
    let humanSelection = "Rock";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  })

  Scissors.addEventListener("click", function() {
    let humanSelection = "Scissors";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  })

    Paper.addEventListener("click", function() {  
    let humanSelection = "Paper";
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}) 
}
humanChoice();
function playRound(humanSelection, computerSelection)
{   const div = document.createElement("div");
    div.style.paddingleft = "500px";
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
        humanScore +=   1;
    }
    else if (humanSelection === "Scissors" && computerSelection === "Paper")
    {
        div.textContent = "You win I guess.";
        humanScore +=  1;
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

} 

function playGame()
{   
    const div = document.createElement("div");

    if (computerScore > 5) 
    {
        div.textContent = "You lost. Computer Wins.";
        document.body.appendChild(div);
    }
    else if (humanScore > 5)
    {
        div.textContent = "You won. Computer Lost.";
        document.body.appendChild(div);
    }
    else
    {
        div.textContent = "Glitch in the system.";
        document.body.appendChild(div);
    }
}
