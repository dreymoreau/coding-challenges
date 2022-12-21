// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// declare sum variable to 0
// loop through using for loop
// += all the elements inside of the array x[i], wrap it with parseInt to make sure they are all numbers
// return sum

function sumMix(x){
    let sum = 0
    for(let i =0; i < x.length; i++){
       sum += parseInt(x[i])
    }
    return sum
 }
 
 console.log(sumMix([9, 3, '7', '3']))
 console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))