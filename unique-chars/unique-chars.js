// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// declare obj variable set to an empty object
// get elements into the object and see how many times they occur
// declare an arr variable assigned to Object.entries method which turns key value pairs into an array
// sort in descending order
// check if the element in the first array, 1st position is greater than 1 if so return false, if is 1 return true
function hasUniqueChars(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  let arr = Object.entries(obj);
  arr.sort((a, b) => b[1] - a[1]);
  console.log(arr);
  if (arr[0][1] > 1) {
    return false;
  }
  return true;
}
console.log(hasUniqueChars("  nAa"), false); // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"), true);
console.log(hasUniqueChars("aA"), true); // case - sensitivity
console.log(hasUniqueChars("++-"), false); // because there are two '+'
