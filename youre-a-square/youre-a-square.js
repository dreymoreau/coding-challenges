// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// directly return using Math.sqrt(n) also use modulus to 1 to check if the number is a whole number, int
function isSquare(n){
    return Math.sqrt(n) % 1 === 0
}

console.log(isSquare(25)) // output => true
console.log(isSquare(3)) // output => false