let coinFlip = Math.round(Math.random())
let choice = prompt('Would you like heads or tails?')

if (coinFlip) {
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!')
    } else {
        alert('The flip was heads but you chose tails...you lose!')
    }
} else {
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!')
    } else {
        alert('The flip was tails and you chose tails...you win!')
    }
}