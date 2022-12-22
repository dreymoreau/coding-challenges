// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// declare sum variable to 0
// loop through using a for loop and the length of the arr parameter
// if a element is positive, greater than 0, add them together into the sum variable
// return total sum variable
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
  }
  
  console.log(positiveSum([1,2,3,4,5]))
  console.log(positiveSum([1,-2,3,4,5]))