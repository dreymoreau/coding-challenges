// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// declare findMinMax variable set to an empty array
// sort array
// push the value in the [0] index to findMinMax
// push the last value in the array which would be the highest to findMinMax
// return findMinMax
function minMax(arr){
    let findMinMax = []
   arr.sort((a,b) => a -b)
   findMinMax.push(arr[0])
   findMinMax.push(arr[arr.length -1])
   return findMinMax
}

console.log(minMax([1, 2, 3, 4, 5])) // output => [1,5]
console.log(minMax([2334454, 5])) //output => [5, 2334454]
console.log(minMax([5])) //output => [5, 5]