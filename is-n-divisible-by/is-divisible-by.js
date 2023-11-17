// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// declare reassign variable and assign it to n toString() , split method and map through passing in Number, so each number is an integer
// declare num variable and assign it to reassign[0] to get the first number
// for loop through, starting i at 1, using arguments built in object for the length
// check if num modulus arguments[i], return false meaning that the first number is not divisible by the rest of the numbers after that return a whole number
// outside of the for loop return true for the numbers that are divisible by all the numbers
function isDivisible(n){
    let reassign = n.toString().split(' ').map(Number)
    let num = reassign[0]
    for(let i = 1; i < arguments.length; i++){
      if(num % arguments[i]){
        return false
      }
  }
  return true
}
console.log(isDivisible(3,3,4),false);
console.log(isDivisible(12,3,4),true);
console.log(isDivisible(8,3,4,2,5),false);
console.log(isDivisible(100,5,4,10,25,20), true)