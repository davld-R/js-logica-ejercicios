// Piedra, papel o tijera
// ¡A jugar! ¡Tienes que devolver el ganador! En caso de empate, devuelve Draw!...

// Ejemplos (Entrada1, Entrada2 --> Salida):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if ((p1 === 'paper' && p2 === 'paper') || (p1 === 'rock' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'scissors')) return 'Draw!';
    if ((p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper')) return `Player 1 won!`
    return `Player 2 won!`
};

console.log(rps('paper', 'rock'))