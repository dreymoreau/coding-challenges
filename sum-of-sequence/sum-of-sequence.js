// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// if begin value is greater than the end return 0
// declare sum variable
// for loop setting i to being, condition to end and the iterator to += step
// add to sum variable
// return sum variable
function sequenceSum (begin, end, step){
    if(begin > end){
        return 0
    }
    
    let sum = 0;
    for(let i = begin; i <= end; i+= step){
       sum += i
       console.log(i)
    }
    return sum
  }
  console.log(sequenceSum(2, 6, 2)) // output => 12
  console.log(sequenceSum(1, 5, 1)) // output => 15
  console.log(sequenceSum(1, 5, 3)) //output => 5