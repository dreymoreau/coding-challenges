// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.
// The input will be an array of lowercase letters and numbers only.

// declare even and odd variables assigned to 0
// declare onlyNums variable and assign it to a parameter and map through passing in the Number method to make sure the elements that are strings will be a number as well, the rest of the elements will be NaN that arent a number
// for loop through
// check if typeof onlyNums[i] is a number and if its even then, even++
// check if typeof onlyNums[i] is a number and if its odd then, odd++
// return even - odd, to get the sum

function solve(a) {
  let even = 0;
  let odd = 0;
  let onlyNums = a.map(Number);
  for (let i = 0; i < onlyNums.length; i++) {
    if (typeof onlyNums[i] == "number" && onlyNums[i] % 2 == 0) {
      even++;
    } else if (typeof onlyNums[i] == "number" && onlyNums[i] % 2 == 1) {
      odd++;
    }
  }
  return even - odd;
}
