// Write a function which calculates the average of the numbers in a given list.

// check if array.length === 0 return 0
// declare total variable to 0
// for loop through
// add all element of array to total variable
// return total // array.length to get the average of numbers given

function findAverage(array) {
    if (array.length === 0) {
    return 0
  }
 let total = 0
 for (let i = 0; i < array.length; i++){
     total += array[i]
 }
 return total / array.length
}

console.log(findAverage([1,2,3,4])) // output => 2.5
console.log(findAverage([])) // output => 0