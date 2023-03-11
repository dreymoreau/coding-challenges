// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//declare a color method
// declare colours variable to Math.random()
// if colours < .25 return 'white'
// else if colours < .50 return 'yellow'
// else if colours < .75 return 'purple'
// else return 'red'

class Ghost {
    constructor() {
    }
    color(){
      let colours = Math.random()
      if(colours < .25) {
          return 'white'
      } else if(colours < .50) {
          return 'yellow'
      } else if(colours < .75) {
         return 'purple'
      } else {
         return 'red'
      }
    }
}

let ghost = new Ghost();
console.log(ghost.color())