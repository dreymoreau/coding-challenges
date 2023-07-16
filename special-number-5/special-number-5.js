// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// declare special variable to an array of the digits that were declared as special, 0,1,2,3,4,5
// declare arr variable and assign it to n using toString() .split() and then map method passing 
// in the Number object to ensure that the values type of arr is a number
// for loop through
// check if arr[i] does not have the numbers from the special arr, if not return 'NOT!!'
// outside of the for loop return 'Special!!' for the numbers that only have the special digits 
// that were declared

function specialNumber(n){
    let special = [0,1,2,3,4,5]
    let arr = n.toString().split('').map(Number)
    for(let i = 0; i < arr.length; i++) {
        if(!special.includes(arr[i])){
            return 'NOT!!'
        }
    }
     return 'Special!!'
  }
  console.log(specialNumber(55)) //"Special!!");)
  console.log(specialNumber(60)) // "NOT!"