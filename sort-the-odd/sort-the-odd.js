// You will be given an array of numbers. You have to sort the odd numbers in ascending order while 
// leaving the even numbers at their original positions.

// declare onlyOdds array
// loop through and check if the elements in the array are odd, push it to the onlyOdds array
// sort
// outside the first for loop, loop through again and check if the numbers are odd and if so, use the shift 
// method with the onlyOdds array elements to get rid of the elements in array[j], and have the odd elements be 
// in ascending order while keeping the even elements in place
// return array

function sortArray(array) {
    let onlyOdds = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            onlyOdds.push(array[i])
            onlyOdds.sort((a,b) => a-b)
        }
    }
    for(let j = 0; j < array.length; j++){
        if(array[j] % 2 !== 0){
            array[j] = onlyOdds.shift()
        }
    }
    return array
  }
  console.log(sortArray([5, 3, 2, 8, 1, 4])) // output => [1, 3, 2, 8, 5, 4]