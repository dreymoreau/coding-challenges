// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2

// P
    // it will always be two inputted arrays, one for arr1, one for arr2, the length of the first array will always have a length of at least one element
// R
    // returning the number that is missing in the second array compared to the first
// E
    // [1, 2, 3], [1, 3] =>2
// P
    // declare sorted1 variable assigning arr1 being sorted to it
    // declare sorted2 variable assigning arr2 being sorted to it
    // declare two for loops using the length for the condition
    // if sorted1[i] != sorted2[i] return sorted1[i]
    // outside of the second for loop and the if statement, return sorted1[i] if the second array, sorted2 is empty
    
    function findMissing(arr1, arr2) {
        let sorted1 = arr1.sort((a,b)=>a-b)
        let sorted2 = arr2.sort((a,b)=>a-b)
        
      for(let i = 0; i < sorted1.length; i++){
          for(let j = 0; j < sorted2.length; i++){
              if(sorted1[i] != sorted2[i]){
                  return sorted1[i]
              }
          }
          return sorted1[i]
      }
    }
    console.log(findMissing([1, 2, 3], [1, 3])) //output => 2
    console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])) //output => 8
    console.log(findMissing([7], [])) //output => 7