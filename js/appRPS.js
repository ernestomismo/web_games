const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const posibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice

posibleChoices.forEach(posibleChoice => posibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}
))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * posibleChoices.length) + 1

    if(randomNumber === 1){
        computerChoice = "rock"
    }else if(randomNumber === 2){
        computerChoice = "scissors"
    }else{
        computerChoice = "paper"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Es un empate!!!"
    }else{
        resultDisplay.innerHTML = "Vete con tu puta madre!!!"
    }
}