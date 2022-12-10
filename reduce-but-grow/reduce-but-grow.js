// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// create a sum variable and assign it the number 1
// loop through the array by length method
// multiply each numbers index by the following number
// return the total number

function grow(x){
    let sum = 1;
    for(let i = 0; i < x.length; i++){
        sum *= x[i]
    }
    return sum
}
console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4])); 
console.log(grow([2, 2, 2, 2, 2, 2])); 