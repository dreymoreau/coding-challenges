// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// if statement with possible player 1 wins
//  else if pl1 === pl2 'draw'
// else player 2 wins


function rpsls(pl1,pl2){
    if (pl1 === "scissors" && pl2 === "paper" || pl1 === "paper" && pl2 === "rock" || 
        pl1 === "rock" && pl2 === "lizard" || pl1 === "lizard" && pl2 === "spock" || 
        pl1 === "spock" && pl2 === "scissors" || pl1 === "scissors" && pl2 === "lizard" || 
        pl1 === "lizard" && pl2 === "paper" || pl1 === "paper" && pl2 === "spock" || 
        pl1 === "spock" && pl2 === "rock" || pl1 === "rock" && pl2 === "scissors") {
        
        return "Player 1 Won!"
        
    } else if(pl1 == pl2) {
       return 'Draw!'
    }
  return "Player 2 Won!"
}

console.log(rpsls('rock', 'lizard')) // => 'Player 1 Won!'