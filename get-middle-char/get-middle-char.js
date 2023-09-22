// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// declare half variable and assign it to use the Math.floor method and pass in s.length / 2 to get the middle element
// check if the length of s string is even, return the 2 elements that are at - 1 and + 1 which would be the 2 middle letters
// else return the element that is at the number of half, since charAt's index starts at 0 this would output the middle letter of the odd string

function getMiddle(s) {
  let half = Math.floor(s.length / 2);
  if (s.length % 2 == 0) {
    return s.slice(half - 1, half + 1);
  } else {
    return s.charAt(half);
  }
}
console.log(getMiddle("test")); //"es"
console.log(getMiddle("testing")); //"t"
