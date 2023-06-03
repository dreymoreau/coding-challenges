// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, 
// can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that 
// string in the order they occur.

// P
// will always be a string being passed in
// R
// returning only the numbers from the string
// E
// "a1b2c3" => 123
// P
// declare values variable assigning it to value.split('') using map method passing Number to convert numbers 
// to number type
// when doing this though, the strings are now "NaN", use filter method to remove all values that are not a 
// number that are NaN and return only numbers
// return values.join('') surrounding it using the Number object to make sure the final elements are numbers

function filterString(value) {
    let values = value.split('').map(Number).filter(value => {
        return !Number.isNaN(value)
    })
    return Number(values.join(''))
  }
  console.log(filterString("a1b2c3")) // 123