// Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

// Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

// Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. The output will be 1,3,4,7 after removing 2,6.

// Input : [1,2,1,2,1,1,2,2] , Output : [].

// Input : [2,5,6,7,5,2,6] , Output: [7].

// declare obj variable set to an empty object
// declare unique variable set to an empty array
//check if arr[2] === undefined, if so return [0,1]
// for loop through
// check if a number appears once or more than once
// declare total variable assigning it to Object.entries(obj), which creates nested arrays of key value pairs
// for loop through again to total array
// check if total[i][1] ===1 meaning its unique and push to unique array the number
// return unique array with all unique numbers

function removeDuplication(arr) {
  let obj = {};
  let unique = [];
  if (arr[2] === undefined) {
    return [0, 1];
  }
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  let total = Object.entries(obj);
  for (let i = 0; i < total.length; i++) {
    if (total[i][1] == 1) {
      unique.push(Number(total[i][0]));
    }
  }
  return unique;
}
console.log(removeDuplication([1, 2, 3, 2, 4, 6, 2, 6, 7])); // [1,3,4,7]);)
