
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// declare a sum variable and set it to an empty array
// for loop set to the length of x parameter
// push each element mulitplying it by 2 into the empty array
// return sum

// **added a refactored version using map**

function maps(x){
    let sum = [];
    for (let i =0; i < x.length; i++) {
        sum.push(x[i] * 2)
    }
    return sum
    //   return x.map(x => x * 2)
}

console.log(maps([1, 2, 3])) // output [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4]))  // output [8, 2, 2, 2, 8] 