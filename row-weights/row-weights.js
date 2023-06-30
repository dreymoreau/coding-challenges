// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// declare total and total2 variable assigned to 0
// for loop through
// if i % 2 === 0 total += array[i]
// else total2 += array[i]
// outside of the for loop, return [total,total2]
function rowWeights(array){
    let total = 0
    let total2 = 0
    for(let i = 0; i < array.length; i++){
        if(i % 2 ===0){
            total += array[i]
        } else {
            total2 += array[i]
        }
    } 
    return [total, total2]
}
console.log(rowWeights([13,27,49])) // output => [62, 27]