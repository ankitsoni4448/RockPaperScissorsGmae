const computerChoiceDisplay = document.getElementById('computer-choice');
const AnkitChoiceDisplay = document.getElementById('Ankit-choice');
const resultDisplay = document.getElementById('Result');
const possibleChoices = document.querySelectorAll('button')

let AnkitChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' , (e) =>{
    AnkitChoice = e.target.id
    AnkitChoiceDisplay.innerHTML = AnkitChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1//we can also use possibleChoice.lenght
    //console.log(randomNumber)
    if(randomNumber===1){
        computerChoice ='rock'
    }
    if(randomNumber===2){
        computerChoice ='scissors'
    }
    if(randomNumber===3){
        computerChoice ='paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === AnkitChoice){
        result = 'It is draw!'
    }
    if(computerChoice === 'rock' && AnkitChoice === 'paper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && AnkitChoice === 'scissors'){
        result = 'you lost!'
    }
    if(computerChoice === 'paper' && AnkitChoice === 'scissors'){
        result = 'you win!'
    }
    if(computerChoice === 'paper' && AnkitChoice === 'rock'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && AnkitChoice === 'rock'){
        result = 'you win!'
    }
    if(computerChoice === 'scissors' && AnkitChoice === 'paper'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}