// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// directly return 
// use toString() method
// then split('') the string into an array
// map through the array to make sure each element is then changed into a number, using map(Number)
// then use reduce method to add all the elements inside of the array together into one number
function getSumOfDigits(integer) {
    return integer.toString().split('').map(Number).reduce((acc, value) => acc + value)
    }
    console.log(getSumOfDigits(123)) // output 6