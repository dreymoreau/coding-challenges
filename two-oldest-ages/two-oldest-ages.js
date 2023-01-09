// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// declare twoHighestNums variable to an empty array
// sort the ages parameter which is an array being passed in from lowest to highest
// push the second greatest element of the array into twoHighestNums using .length -2
// push the greatest element of the array into twoHighestNums using .length - 1
// return twoHighestNums

function twoOldestAges(ages){
    let twoHighestNums = []
    ages.sort((a,b) => a - b)
    twoHighestNums.push(ages[ages.length-2])
    twoHighestNums.push(ages[ages.length - 1])

    return twoHighestNums
}

console.log(twoOldestAges([1, 2, 10, 8]))  // output => [8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])) // output => [45, 87]