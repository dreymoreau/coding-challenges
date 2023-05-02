// Write an algorithm that takes an array and moves all of the zeros to the end, preserving 
// the order of the other elements.

// declare two arrays: 
// pushToEnd & onlyZeroes
// loop through
// check if arr[i] !== 0 push to pushToEnd array
// else if arr[i] == 0 push to onlyZeroes array
// return by using concat method with pushToEnd at the start and onlyZeroes 
// being passed in, in the parentheses

function moveZeros(arr){
    let pushToEnd = []
    let onlyZeroes = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0) {
            pushToEnd.push(arr[i])
        } else if(arr[i] == 0){
            onlyZeroes.push(arr[i])
        }
    }
    return pushToEnd.concat(onlyZeroes)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //output => [false,1,1,2,1,3,"a",0,0]