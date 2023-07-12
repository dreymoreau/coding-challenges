// A Tidy number is a number whose digits are in non-decreasing order.
// return true if the numbers are in ascending order, false if not

// reassign n to a string and then split
// declare arr variable and assign it to n using the map method passing 
// in the Number method to change the type back to a number
// loop through and check if arr[i] is greater than arr[i+1] return false if it is
// outside of the for loop return true


function tidyNumber(n){
    let str = n.toString().split('')
    let arr = str.map(Number)
    console.log(arr)
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
  }
  console.log(tidyNumber(12)) //true);
  console.log(tidyNumber(102)) //false);
  console.log(tidyNumber(9672)) // false);