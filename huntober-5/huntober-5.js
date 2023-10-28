// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// declare uniques variable and assign it to arr using map method, inside the map create a new Set() passing in the parameter used for map, this will create a new array of objects that will remove all duplicate elements
// declare total variable assigning it to uniques variable and use reduce method, on the curr property use the size method to multiply based off of the length, passing 1 as the starting point, if its 0 the answer will always be 0
// return total

function solve(arr){
    let uniques = arr.map(item => new Set(item))
    let total = uniques.reduce((prev,curr) => prev * curr.size,1)
    return total

}
console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)