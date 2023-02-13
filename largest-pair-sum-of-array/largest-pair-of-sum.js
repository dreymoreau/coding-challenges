// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// declare sum variable to 0
// sort numbers array
// add Math.max(...numbers) to sum variable
// then add element that is at numbers[numbers.length - 2] to sum variable
// return sum
function largestPairSum (numbers) {
    let sum = 0;
    numbers.sort((a,b) => a-b)
        sum += Math.max(...numbers)
        sum += numbers[numbers.length -2]
    return sum
}

console.log(largestPairSum([10,14,2,23,19])) // output => 42