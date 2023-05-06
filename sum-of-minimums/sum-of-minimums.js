// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// declare sum variable
// loop through
// get all smallest elements from the nested arrays by using Math.min and spread operator using arr[i], add them all to the sum variable
// return sum 

function sumOfMinimums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += Math.min(...arr[i])
    }
    return sum
  }
  
  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) //output => 9