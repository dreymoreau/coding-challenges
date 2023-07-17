// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.

// Examples:

// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true


// declare obj variable to empty obj
// for loop through
// assign obj[arr[i]] to obj[arr[i]] either be +1 or 1
// outside of the for loop, declare values variable assigning it to Object.values(obj)
// sort values in descending
// check if values[0] > 1 return true
// return false

function solution(arr){
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    }
     let values = Object.values(obj)
     values.sort((a,b) => b - a)
     if(values[0] > 1) {
         return true
     }
     return false
   }
   
   console.log(solution([1,2,3])) // false
   console.log(solution([1,2,3,6,5,6]))//true);)
   console.log(solution([1,2,3,'a','b']))//false);)