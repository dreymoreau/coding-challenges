// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// declare sum variable to add the squared numbers to
// loop through using a for loop
// have the variable plus equals to numbers[i] multiplying by itself
// return sum

function squareSum(numbers){
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        sum += (numbers[i] * numbers[i])
    }
    return sum
  }
  
  console.log(squareSum([1,2]))
  console.log(squareSum([0, 3, 4, 5]))