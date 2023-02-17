// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// directly return using Math.sign() which is a method that 0 / -0 or 1/-1 depending on the number passed in
// it is then mulitplied by the number that is passed in as an argument and making sure it still is a number by using parseInt
// toString()
//split('') into an array
// reverse()
// join('') back
function reverseNumber(n) {
    return Math.sign(n)*parseInt(n.toString().split('').reverse().join(''));
 }
 
 console.log(reverseNumber(-123)) // => output -321
 console.log(reverseNumber(1000)) // => output 1