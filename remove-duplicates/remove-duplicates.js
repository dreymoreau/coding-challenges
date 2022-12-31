// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//create sum variable to an empty arr
// loop through the array using for loop
//if the indexOf a[i] === -1, push to sum
// return sum arr

function distinct(a) {
    let sum = []
    
     for (let i = 0; i < a.length; i++) {
      if (sum.indexOf(a[i]) === -1) {
        sum.push(a[i]);
      }
    }
    return sum
  }
  
  console.log(distinct([1, 2, 2, 2, 3])) // output [1, 2, 3]