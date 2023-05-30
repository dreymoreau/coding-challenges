// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// check first if arr1 and arr2 lengths are 0 return an empty array
// loop through arr2
// if arr1 doesnt include arr2[i] using falsy, push arr2 to arr1
// return and sort arr1 in ascending order

function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return [];
  }
  for(let i = 0; i < arr2.length; i++) {
    if(!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1.sort((a, b) => a - b);
}
console.log(mergeArrays([1,2,3,4], [5,6,7,8])) // [1,2,3,4,5,6,7,8])
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])) // [1,2,3,4,5,6,7,8,9,10])
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])) // [1,2,3,4,5,7,9,10,11,12], 


// first attempt

// function mergeArrays(arr1,arr2) {
//     let sum = []
//     let uniques = []
    
//       if (arr1.length == 0 && arr2.length == 0) {
//       return [];
//     }
//    for(let i = 0 ; i < arr1.length; i++){
//            sum.push(arr1[i])
//            sum.push(arr2[i])
//    }
//    for(let i = 0; i < sum.length; i++){
//    if(!uniques.includes(sum[i])){
//                    uniques.push(sum[i])
//                }
//    }
//    return uniques.sort((a,b) => a-b)
//   }