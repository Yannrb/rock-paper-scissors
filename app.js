let playerScore = 0 
let compScore = 0



function computerPlay(){
    const ArrOfChoices = ['rock', 'paper', 'scissors']
    const RandNum = Math.floor(Math.random() *3)
    const compChoice = ArrOfChoices[RandNum]
    return compChoice
}


const playRound = (playerSelection, computerSelection) => {
if (playerSelection === 'rock'&& computerSelection === 'rock'){
    return 'Its a Tie both picked rock'
}

else if (playerSelection === 'paper'&& computerSelection === 'paper'){
    return 'Its a Tie both picked paper'
}

else if (playerSelection === 'scissors'&& computerSelection === 'scissors'){
    return 'Its a Tie both picked scissors'
}
else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore ++
    return 'you won! scissors shred paper'
}
else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    compScore ++
    return 'you lost! scissors shred paper'
}
else if (playerSelection === 'rock' && computerSelection === 'paper'){
    compScore ++
    return 'you lost! paper glues rock'
}
else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore ++
    return 'you won! paper glues rock'
}
else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    compScore ++
    return 'you lost! rock smash scissors'
}
else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore ++
    return 'you won! rock smash scissors'
    }
}


    const game = () => {
    for (let i = 0 ; i < 5; i++){
    
    const playerSelection = prompt ('choose what to throw', '').toLowerCase() 
    const computerSelection = computerPlay()    
        console.log(playRound (playerSelection, computerSelection))
    }
    if (playerScore > compScore){
        return 'You beat the computer!'
    }
    else if(playerScore < compScore){
        return 'You lost!'
    }
    else {
        return 'You tied with the computer!'
    }
}
console.log (game())