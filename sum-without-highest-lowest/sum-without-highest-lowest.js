// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// sum with index
// check if array is null, undefined, less than 2 elements in length or empty, return 0
// declare sum variable
// sort
// start for loop counter at 1 skipping the first element, have the condition be i <= array.length -2
// sum += array[i]
// return sum
function sumArray(array) {
if(array === null || array === undefined || array.length <= 2 || array === []) {
    return 0
}
let sum = 0;
array.sort((a,b) => a-b)
for(let i = 1; i <= array.length - 2; i++) {
    sum += array[i] 
}
return sum
}

// sum with values 
// check if array is null, undefined, less than 2 elements in length or empty, return 0
// return directly, sort, slice first and last element using 1, -1, then reduce elements into one number

function sumArray(array) {
    if(array === null || array === undefined || array.length <= 2 
    || array === []) {
    return 0
}

return array.sort((a,b) => a -b).slice(1,-1).reduce((prev, curr) => prev + curr)
}

console.log(sumArray([ 3, 5 ])) // output => 0
console.log(sumArray([ 6, 2, 1, 8, 10 ])) // output => 16
console.log(sumArray([ -6, -20, -1, -10, -12 ])) // output => -28