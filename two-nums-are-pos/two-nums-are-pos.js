// Your job is to write a function, which takes three integers a, b, and c as arguments, 
// and returns True if exactly two of of the three integers are positive numbers 
// (greater than zero), and False - otherwise.

// declare arr assigning it to an array holding a b and c parameters
// sort in ascending order
// for loop through
// check if arr[0] is less than 0 and arr[1] && arr[2] are greater than 0 return true
// outside the if statement return false if the conditions arent meant

function twoArePositive(a, b, c) {
    let arr = [a,b,c]
    arr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++){
        if(arr[0] < 0 && arr[1] > 0 && arr[1] > 0){
            return true
        }
        return false
    }
}

console.log(twoArePositive(2, 4, -3)) // true
console.log(twoArePositive(4, 6, 10)) // false