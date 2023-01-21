// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
// declare variable to empty array
//for loop
//if conditional using modulus
//push to empty array
// return array
function noOdds(values){
    let onlyEvens = []
    for (let i = 0; i < values.length; i++) {
        if(values[i] % 2 === 0){
            onlyEvens.push(values[i])
        }
    }
    return onlyEvens
}

console.log(noOdds([0,1,2,3])) // output => [0,2]

// ***refactored version***

function noOdds(values){
    return values.filter(x => x % 2 ===0)
  }

  
console.log(noOdds([0,1,2,3])) // output => [0,2]