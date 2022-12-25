// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Example:
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// set count to empty array, 
//for loop
// push to count array i + 1 + ': ' + array[i]
// return count
function number(array) {
    let count = [];
    for(let i = 0; i < array.length; i++) {
        count.push((i + 1) + ': ' + array[i])
    }
    return count
  }
  
  console.log(number(["a", "b", "c"]))
  // output => ["1: a", "2: b", "3: c"]