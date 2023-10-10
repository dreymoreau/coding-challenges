// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// first check if the num is less than or equals to 9, return 0 because no calculations need to be done
// declare sum variable and assign to num using the toString, split and then reduce method to multiply the numbers together, in the reduce multiplication, it needs to be surrounded using the Number method because the elements are strings due to splitting it from an integer into a split first having to use the split method
// check if num is greater than 9 then pass in the persistence function, using sum as a parameter, a recursive function, return it and add +1 to get the number of times the function has to run to get it to be a single number

function persistence(num) {
  if (num <= 9) {
    return 0;
  }
  let sum = num
    .toString()
    .split("")
    .reduce((prev, curr) => Number(prev * curr));

  if (num > 9) {
    return persistence(sum) + 1;
  }
}
console.log(persistence(39)); //3
console.log(persistence(4)); //0
console.log(persistence(999)); //4
