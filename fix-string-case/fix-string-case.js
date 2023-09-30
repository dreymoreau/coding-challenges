// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on

// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// declare lowercase, uppercase variable assigned to 0
// check if s[i] === s[i].toUpperCase() then uppercase++ else lowercase++
// return using a ternary operator, that if uppercase is greater than lowercase, all letters in the string will be uppercased
// else to lowercase

function solve(s) {
  let lowercase = 0;
  let uppercase = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercase++;
    } else {
      lowercase++;
    }
  }
  return uppercase > lowercase ? s.toUpperCase() : s.toLowerCase();
}
