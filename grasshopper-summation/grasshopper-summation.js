// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// declare sum variable
// for loop through starting at 1 and using the condition i <= num
// add numbers to sum 
// return sum

function summation(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
   }
   console.log(summation(8)) // output => 36