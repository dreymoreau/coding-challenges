// Given an array of numbers, return a new array of length number containing the last even numbers
// from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// declare evens array
// for loop through
// if array[i] is even push to evens array
// check if the number parameter is greater than one, if so slice the first evens number, 
// if the parameter is 1 then dont slice and return

function evenNumbers(array, number) {
    let evens = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evens.push(array[i])
        }
    }
    if(evens.length > 1) {
        return evens.slice(-number)
    }
    return evens
  }
  
  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) //, [4, 6, 8]);
  console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8, 26]);
  console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)) //, [6]);