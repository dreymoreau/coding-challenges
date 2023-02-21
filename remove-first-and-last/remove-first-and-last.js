// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// declare firstAndLast variable assigning str.split('') to it
// use pop() method
// use shift() method
// return firstAndLast using .join('') to turn it back into a string

function removeChar(str){
    let firstAndLast = str.split('')
    firstAndLast.pop()
    firstAndLast.shift()
    return firstAndLast.join('')
}

console.log(removeChar('hello'))

// *** alternate way**
function removeChar(str){
    return str.slice(1, -1)
}


console.log(removeChar('hello'))