// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// declare num and assign it to n.toString().split('')
// declare total variable assign to 0
// for loop through using num.length
// inside the for loop total++
// return total 

function digits(n) {
   let num = n.toString().split('')
   let total = 0
   for(let i = 0; i < num.length; i++){
     total++
   }
  return total
}
console.log(digits(123)) // output => 3

// alternate 
function digits(n) {
  return n.toString().length;
}