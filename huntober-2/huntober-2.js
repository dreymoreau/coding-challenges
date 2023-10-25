// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// return n and use map method, passing in Number method, to make sure everything is a number, then use reduce method to sum all numbers
function sumMix(n){
    return n.map(Number).reduce((prev,curr) => prev+curr)
}

// alternate solution 

// declare arr variable and assign it to n parameter and use map method passing in Number method
// return arr and use reduce method 
function sumMix(n){
    let arr = n.map(Number)
    return arr.reduce((prev,curr) => prev + curr)
}

// alternate solution
// declare arr variable and assign to n parameter and use map method, use Number method 
// declare sum variable and assign it to 0
// for loop through
// sum up all elements using sum += arr[i]
// return sum outside of for loop

function sumMix(n){
    let arr = n.map(Number)
    let sum = 0 
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 