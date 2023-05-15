// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// declare variable set to an empty array
// loop through
// if arr.length < n, push(firstValue,secondValue)
// push firstValue, secondValue to arr
// if arr.length > n, pop()
// return arr
function alternate(n, firstValue, secondValue){
    if(n === 0){
        return []
    }
      let arr = []
    for(let i = 0; i < n; i++){
        if(arr.length < n){
        arr.push(firstValue,secondValue)
        if(arr.length > n){
            arr.pop()
        }
      }
    }
    return arr
  }
  
  console.log(alternate(5, true, false)) // output => [true, false, true, false, true]
  console.log(alternate(10, "blue", "red")) // output =>  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]