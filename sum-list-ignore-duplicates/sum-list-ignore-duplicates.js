// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// declare empty object
// for loop through
// assign each element to be + 1 or either is 1
// declare unique variable assigned to an empty array
// use for in loop to check if the value of each key is less than or equals to 1 then push the key to unique, each element is a string at this point so using the Number method is important to ensure there will be no string concatenation further on
// return unique and use reduce method to sum the array into one number

function sumNoDuplicates(numList) {
  let obj = {};
  for (let i = 0; i < numList.length; i++) {
    obj[numList[i]] = obj[numList[i]] ? obj[numList[i]] + 1 : 1;
  }
  let unique = [];
  for (let key in obj) {
    if (obj[key] <= 1) {
      unique.push(Number(key));
    }
  }
  return unique.reduce((prev, curr) => prev + curr, 0);
}
console.log(sumNoDuplicates([1, 1, 2, 3])); //5

// a different solution
function sumNoDuplicates(arr) {
  let uniqueArr = [];
  let sum = 0;
  arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      uniqueArr.push(num);
      console.log(uniqueArr);
      sum += num;
    }
  });
  return sum;
}
