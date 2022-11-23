// Title: Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// split string to array, return

// first attempt
function stringToArray(string){
    let sum = []
    for (let i = 0; i < string.length; i++) {
        sum = string.split(',')
    }
    return sum
} 

// refactored attempt
function stringToArray(string){
  return string.split(' ')
}

console.log(stringToArray("Robin Singh"));