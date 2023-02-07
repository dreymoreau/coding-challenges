// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//declare min variable assigning to Math.min to get the smallest value of the parameters
// declare max variable assigning to Math.max to get the greatest value of the parameters
// declare sum variable
// check if a equals b, return a
// declare for loop and use the min and max as the counter and condition
// add i to the sum
// return sum

function getSum(a, b){
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let sum = 0
    
    if ( a == b ) {
        return a
    }
    
    for(let i = min; i <= max; i++){
      sum += i
    }
     return sum
   }
   
   console.log(getSum(-1, 2)) // output => 2
   console.log(getSum(1, 1)) // output => 1