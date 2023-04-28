// Write a function that can return the smallest value of an array or the index of that value. 
// The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// declare min variable assigning it to Math.min(...arr)
// return toReturn === 'value' ? min : arr.indexOf(min) using ternary operator

function min(arr, toReturn) {
    let min = Math.min(...arr)
    return toReturn === 'value' ? min : arr.indexOf(min)
}
console.log(min([1,2,3,4,5], 'value')) // output => 1
console.log(min([1,2,3,4,5], 'index')) // output => 0