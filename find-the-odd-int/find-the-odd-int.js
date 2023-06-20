
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// declare obj variable set to an empty object
// for loop through
// assign obj[A[i]] to either +1 or is 1 to get all numbers into key value pairs
// outside of the for loop, use for in loop to check if the number isnt even by using modulus
// return num being wrapped around in the Number() method to ensure the output is a number
function findOdd(A) {
    let obj = {}
    for(let i = 0; i < A.length; i++){
        obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1
    }
    
    for(num in obj){
        if(obj[num] % 2 !== 0){
            return Number(num)
        }
    }
   
   }

   //other solution

   function findOdd(A) {
    let obj = {}
    for(let i = 0; i < A.length; i++){
        obj[A[i]] = obj[A[i]] ? obj[A[i]] + 1 : 1
    }

    let num = Object.entries(obj)
    let odd = num.filter(x => x[1] % 2 !== 0)
    return Number(odd[0][0])

   }
   console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) // output => 5 
   console.log(findOdd([0,1,0,1,0])) // output => 0