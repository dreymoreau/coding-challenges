// A trick I learned in elementary school to determine whether or not a number was divisible by three 
// is to add all of the integers in the number together and to divide the resulting sum by three. If 
// there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// declare total variable
// declare splitUp variable assinging it to str.split('')
// loop through
// assign total to splitUp.map(Number) to make sure its being converted to a number then reduce all the numbers into one number
// outside of the for loop, check if total is divisible by 3 by using modulus, return true if so
// return false if it isnt

function divisibleByThree(str){
    let total
    let splitUp = str.split('')
    for(let i = 0; i < splitUp.length; i++){
        total = splitUp.map(Number).reduce((prev, curr) => prev + curr, 0)
    }
    if(total % 3 == 0){
        return true
    }
    return false
}

console.log(divisibleByThree('123')) // true
console.log(divisibleByThree('88')) // false)