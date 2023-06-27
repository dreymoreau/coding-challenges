// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// declare obj variable to an empty object
// for loop through
// obj[arr[i]] assign to obj[arr[i]] using ternary to plus 1 or equals to 1
// outside of the for loop declare array variable to Object.entries(obj)
// sort array in descending order
// if array [0][1] > arr.length/2
// return array[0][0] surrounded Number()
// else return -1

function dominator(arr) {
    let obj = {}
for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
}
    let array = Object.entries(obj)
    array.sort((a,b) => b[1] - a[1])
   
  if(array[0][1] > arr.length/2) {
    return Number(array[0][0])
   } else {
         return -1
    }
}

console.log(dominator([3,4,3,2,3,1,3,3])) // 3)