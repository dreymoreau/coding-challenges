// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum 
// of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// P
    // will always be nested arrays being passed in. the arrays will never be empty
// R
    // returning the sum of the smallest number from each array, as one total number
// E
    // [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) 2 + 3 + 4 =9
// P
    // declare sum variable
    // loop through 
    // sum += Math.min and using the spread operator and arr[i], which would output the smallest value of each array
    // return sum variable

    function sumOfMinimums(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += Math.min(...arr[i])
        }
        return sum
     }
     
     console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])) // output => 9