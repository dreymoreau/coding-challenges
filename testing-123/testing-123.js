// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// declare total variable to an empty array
// for loop through
// push to empty array using i + 1 + ":" + array[i]
function number(array){
    let total = []
    for (let i = 0; i < array.length; i++) {
        total.push(i+1 + ": " + array[i] )
    }
    return total
  }
  
  console.log(number(["a", "b", "c"])) // output => ["1: a", "2: b", "3: c"]
