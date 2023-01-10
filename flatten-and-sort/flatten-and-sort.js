// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// declare combinedArr variable assigning it to an empty arr using concat method, with the spread operator on the array parameter
// sort combinedArr array
// return combinedArr

function flattenAndSort(array) {
    let combinedArr = [].concat(...array);
    combinedArr.sort((a,b) => a -b)
     return combinedArr
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])) // output => [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])) // output => [1, 2, 3, 4, 5, 6, 100]