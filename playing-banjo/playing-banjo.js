// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// split name into an array
// check if the first index equals r or R, if so return the name and plays banjo using a template string
// outside the if statement return does not play banjo using a template string

function areYouPlayingBanjo(name) {
    name.split('')
   if(name[0] === 'r' || name[0] === 'R') {
       return `${name} plays banjo`
   }
    return `${name} does not play banjo`
  }
  
  
  console.log(areYouPlayingBanjo("Adam")) // output =>  "Adam does not play banjo"
  console.log(areYouPlayingBanjo("Ringo")) // output => "Ringo plays banjo"
  console.log(areYouPlayingBanjo("rolf")) // output => "rolf plays banjo"