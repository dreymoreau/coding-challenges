// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// declare sum variable assigning it the numbers parameter being sorted 
//return adding up the two smallest numbers in the array, using index [0] and [1]
function sumTwoSmallestNumbers(numbers) {  
    let sum = numbers.sort((a,b) => a-b)
    return sum[0] + sum[1]
  }
  
  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))