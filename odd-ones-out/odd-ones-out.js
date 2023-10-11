// Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

// declare obj variable to an empty object
// use forEach loop to create key value pairs for each element in the array and how many times they appear in the array
// return nums and use filter method then use the object value for each key to see if they show up and even amount of times or odd amount of times, using modulus and 2 == 0 this will only return the numbers that show up an even amount of times

function oddOnesOut(nums) {
  let obj = {};
  nums.forEach((num) => (obj[num] = (obj[num] || 0) + 1));
  return nums.filter((element) => obj[element] % 2 === 0);
}
console.log(oddOnesOut([1, 2, 3, 1, 3, 3])); // [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68])); // [75, 68, 75, 68]);
