// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// return directly using filter, indexOf and lastIndexOf
// indexOf will check the numbers in the array by passing in the x parameter, then it is being compared with the 
// lastIndexOf method checking where the numbers are that are equal to one another, if they are equal then they are 
// filtered out the array and the unique one is kept in
// wrapping the entire statement using the Number method to make sure we are returning solely a number and not an array

function stray(numbers) {
    return Number(numbers.filter(x => numbers.indexOf(x) === numbers.lastIndexOf(x)))
  }
  console.log(stray([1, 1, 2])) // output => 2