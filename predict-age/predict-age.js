// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

// declare arr variable to an array with all the parameters
// declare sum and use map method on arr to multiply each element by itself
// declare total variable and reduce sum to one number
// declare sqrt variable and get the square root of total
// return using Math.floor() and sqrt/2 to get prediction of age, Math.floor will return the largest integer less than or equal to a given number and the testcases all want the whole number rounded down not rounded up
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    let sum = arr.map(x=> x*x)
    let total = sum.reduce((prev,curr) => prev+curr,0)
    let sqrt = Math.sqrt(total)
    return Math.floor(sqrt / 2)
    
  }
  
  // alternate way
  
  function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(arr.map(x=> x*x).reduce((prev,curr) => prev+curr,0)) / 2)
  }
  
  console.log(predictAge(65,60,75,55,60,63,64,45)) // 86);   