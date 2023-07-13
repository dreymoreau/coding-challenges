// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// declare first3 assigning it to numbers.slice(0,3).join() to get the first 3 numbers
// declare middle3 assigning it to numbers.slice(3,6).join() to get the next 3 numbers
// declare last4 assigning it to numbers.slice(6,10).join() to get the last 4  numbers
// return using template string with the parentheses wrapping the first3 variable with a space after and then a dash in between the middle3 and last4 variables to return the phone number

function createPhoneNumber(numbers){
    let first3 = numbers.slice(0,3).join('')
    let middle3 = numbers.slice(3,6).join('')
    let last4 = numbers.slice(6,10).join('')
    return `(${first3}) ${middle3}-${last4}`
}
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) //"(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //"(123) 456-7890")