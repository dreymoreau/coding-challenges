// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// declare first variable assigning it to an empty string
// reassign s to use split method at every word break
// for loop
// add each first letter from each element to first string using +=
// return first

function makeString(s) {
  let first = "";
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    first += s[i][0];
  }
  return first;
}
console.log(makeString("brown eyes are nice")); // "bean"
