// Complete the function that takes two integers (a, b, where a < b) and return an array of all 
// integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// P
    // will always be two parameters, the starting point and the ending point
// R
    // return an array that has all numbers from one to the other, make sure that the b parameter number is included
// E
    // between(-2, 2))//, [-2, -1, 0, 1, 2]));)
// P
    // declare total array
    // for loop, i = a, i <=b 
    // push i to total array
    // return total
    function between(a, b) {
        let total = []
        for (let i = a; i <= b; i++){
            total.push(i)
        }
        return total
      }
      console.log(between(1, 4)) //, [1, 2, 3, 4]));
      console.log(between(-2, 2))//, [-2, -1, 0, 1, 2]));)