// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each 
// of the number's decimal digits.

// For example: (Input --> Output)

// declare num variable assigning it to nothing
// declare add variable assigning it to number.toString().split('')
// for loop through
// check if there is an element inside of the array that has a - which should be removed since the final 
// calculation of summing will be adding positive ints together, if there is a - element shift it
// else reassign the num variable to add.map(Number) creating a new array that will change each element to a number data type
// return num using reduce method

function sumDigits(number) {
    let num 
    let add = number.toString().split('')
    for(let i = 0; i < add.length; i++){
        if(add[i] === '-'){
            add.shift()
        } else {
            num = add.map(Number)
            return num.reduce((prev,curr) => prev + curr,0)
     }
    }
}

console.log(sumDigits(10)) // output => 1
console.log(sumDigits(99)) // output => 18
console.log(sumDigits(-32)) // output => 5