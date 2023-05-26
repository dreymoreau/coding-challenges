// Write a function, factory, that takes a number as its parameter and returns another function.

// The returned function should take an array of numbers as its parameter, 
// and return an array of those numbers multiplied by the number that was 
// passed into the first function.

// In the example below, 5 is the number passed into the first function. 
// So it returns a function that takes an array and multiplies all elements in it by five.

// Translations and comments (and upvotes) welcome!

// directly return using array variable and mapping through multiplying each 
// element by x which would be the number that is being passed in to factory

var myArray = [1, 2, 3];
function factory(x){
    return array => array.map(a => a * x)
}

var threes = factory(3)
console.log(threes(myArray)) //[3, 6, 9])