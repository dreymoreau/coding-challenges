// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// declare a variable to empty array
// for loop through
// push s argument to a array
// return a, using join method to join back into a string

function repeatStr (n, s) {
    let a = []
 for(let i = 0; i < n; i++){
 a.push(s)
 }
 return a.join('')
}

console.log(repeatStr(3, 'hi')) // output => hihihi