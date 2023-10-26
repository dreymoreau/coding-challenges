// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// declare sum variable and assign to n parameter and use reduce method to sum all elements in the array into one integer
// declare avg variable and assign it to sum variable / the length of n parameter
// the problem asks for the integer to be rounded down so return using Math.floor method and pass in avg

function getAverage(n){
   let sum = n.reduce((prev,curr) => prev + curr)
   let avg = sum / n.length
   return Math.floor(avg)
}
console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1)