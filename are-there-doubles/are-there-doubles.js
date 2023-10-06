// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.
// reassign the str parameter to use the toLowerCase method to have all elements in the string be lowercased
// for loop through
// check if str[i] == str[i+1], if so return true
// outside of the for loop return false, which means there isnt any double elements that are next to one another

function doubleCheck(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(doubleCheck("abca")); // false
console.log(doubleCheck("a 11 c d")); // true
console.log(doubleCheck("a b  c")); //true
