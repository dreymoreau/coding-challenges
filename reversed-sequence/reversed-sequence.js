// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// declare empty array
// for loop i = n, i > 0 and i--
// push i elements to reversed array
// return reversed array

function reverseSeq(n){
    let reversed = []
     for (let i = n; i > 0; i--) {
         reversed.push(i)
     }
     return reversed
}
console.log(reverseSeq(5)) // output => [5,4,3,2,1]