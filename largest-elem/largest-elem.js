
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// check if n == 0 return an empty array
// return array sorted ascending, and then use slice method -n to go from the 
// back of the array to return the amount of elements that is being asked of from the n parameter

function largest(n, array) {
    if(n == 0) {
        return []
    }
    return array.sort((a,b) => a - b).slice(-n)    
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // output => [9,10]
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])) // output => [3, 5, 9, 13, 22, 50, 63]