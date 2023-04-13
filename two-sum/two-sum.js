// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different 
// items in the array that, when added together, give the target value. The indices of these items should then be returned in a 
// tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target
// will always be the sum of two different items from that array).

// P
    // it will always be an array being passed in, the input array will always be valid and have a length of two or greater, the 
    // items will always be numbers, the target will always be the sum of the two elements inside of the numbers array
// R
    // returning the indexes of the two numbers that make up the target integer
// E
    // ([1,2,3],4)) //output => [0,2]]
// P
    // declare for loop using numbers.length
    // declare second for loop having j set to i + 1 to go to the next element inside of the numbers array
    // check if numbers[i] + numbers[j] === target
    // return [i,j]
    
    function twoSum(numbers, target) {
        for(let i = 0; i < numbers.length; i++){
            for(let j = i + 1; j < numbers.length; j++){
                if(numbers[i] + numbers[j] === target){
                    return [i,j]
                }
            }
         }
      }
      
          console.log(twoSum([1,2,3],4)) //output => [0,2]]
          console.log(twoSum([1234,5678,9012], 14690)) // output => [1,2]]