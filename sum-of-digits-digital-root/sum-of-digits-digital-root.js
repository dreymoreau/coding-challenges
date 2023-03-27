// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

// declare singleNum variable assigning it to n and using toString() and split('') methods
// declare sum variable = 0
// for loop using singleNum.length for the condition
// adding each element of the array using singleNum[i] to the sum variable but making sure they are 
// all numbers when adding to sum by wrapping it using the Number() object
// then check to see if sum is greater than 9 since there still is farther adding to do, to get it down 
// to a single number, returning the function and passing in sum to run the script again
// return sum outside of the for loop and if statement when the calculations are finished and a single number is left

function digitalRoot(n) {
    let singleNum = n.toString().split('')
    let sum = 0
    for(let i = 0; i < singleNum.length; i++){
        sum += Number(singleNum[i])
    }
    if(sum > 9){
      return digitalRoot(sum)
     }
     return sum
  }
  
  console.log(digitalRoot(942)) // output => 6
  console.log(digitalRoot(132189)) // output => 6