// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

//**First option**
//declare i to 1
// while n is greater than
// n = n / 2, then return if n equals a whole number which would show if its a power to 2 or not

function isPowerOfTwo(n){
    let i = 1;
    while (n > 1){
     n = n / 2
    }
  return n===1;
  }
  
//**Second option
// using Math.log2() which returns the base of a number and in the es6 update, we can just add 2 beside to represent what we are checking for in the 
//parentheses, just like the previous option, making sure the number is a whole number by using modulus 1 === 0

  function isPowerOfTwo(n){
   return Math.log2(n) % 1 === 0
  }
  
  console.log(isPowerOfTwo(2)) // => true
  console.log(isPowerOfTwo(5)) // => false