// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely 
// comprised of even integers except for a single integer N. Write a method that takes the 
// array as an argument and returns this "outlier" N.

// declare odd variable to an empty array
// declare even variable to an empty array
// loop through
// if integers[i] % 2 === 0, even.push(integers[i])
// else odd.push(integers[i])
// outside of the for loop check if odd.length === 1, return odd and use join('') method to 
// turn it back into a single output also use Number method to ensure the type is a number
// else return even, using join('') and Number() method if the length of the odd array is greater 
// than 1

function findOutlier(integers){
    let odd = []
    let even = []
    
    for(let i = 0; i < integers.length; i++){
        if(integers[i] % 2 === 0){
            even.push(integers[i])
        } else {
            odd.push(integers[i])
        }
    }
    if(odd.length === 1){
        return Number(odd.join(''))
    } else {
        return Number(even.join(''))
    }
  }
  
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11