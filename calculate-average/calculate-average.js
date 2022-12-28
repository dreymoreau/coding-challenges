// Write a function which calculates the average of the numbers in a given list.

// check if array.length === 0 return 0
// declare sum variable to 0
// for loop through
// add all elements together to sum variable
// return sum // array.length to get the average of numbers given

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
    }
    
    console.log(findAverage([1,1,1]))
    console.log(findAverage([1,2,3]))