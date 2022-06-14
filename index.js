const rockBtn = document.querySelector('.rock-button');
const paperBtn = document.querySelector('.paper-button');
const scissorsBtn = document.querySelector('.scissors-button');

rockBtn.addEventListener('click', handleRockClick)
paperBtn.addEventListener('click', handlePaperClick)
scissorsBtn.addEventListener('click', handleScissorsClick)


let player1 = ''

let playerScore = 0;
let computerScore = 0

function handleRockClick() {
    player1 = 'rock'
    paperBtn.classList.remove('paper')
    scissorsBtn.classList.remove('scissors')
    handleIA()
}

function handlePaperClick() {
    player1 = 'paper'
    paperBtn.classList.remove('rock')
    scissorsBtn.classList.remove('scissors')
    handleIA()
}

function handleScissorsClick() {
    player1 = 'scissors'
    paperBtn.classList.remove('paper')
    scissorsBtn.classList.remove('rock')
    handleIA()
}

let toolsContainer = [rockBtn, paperBtn, scissorsBtn]
                      // 0          1          2
function handleIA() {
    let random = Math.floor(Math.random() * 3)
    console.log(random)
    if(random === 0 && player1 === 'scissors') {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Computer wins!'
        document.body.appendChild(winner)
        computerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        } , 2000)

    } else if(random === 0 && player1 === 'paper') {    
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Player wins!'
        document.body.appendChild(winner)
        playerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        }, 2000)

    } else if(random === 1 && player1 === 'rock') {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Computer wins!'
        document.body.appendChild(winner)
        computerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        } , 2000)
    } else if(random === 1 && player1 === 'scissors') {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Player wins!'
        document.body.appendChild(winner)
        playerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        } , 2000)
    } else if(random === 2 && player1 === 'paper') {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Computer wins!'
        document.body.appendChild(winner)
        computerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        } , 2000)
    } else if(random === 2 && player1 === 'rock') {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Player wins!'
        document.body.appendChild(winner)
        playerScore++
        setTimeout(() => {
            document.body.removeChild(winner)
        } , 2000)
    } else {
        const winner = document.createElement('div')
        winner.classList.add('winner')
        winner.innerHTML = 'Draw!'
        document.body.appendChild(winner)
        setTimeout(() => { 
            document.body.removeChild(winner)
        } , 2000)
    }
}