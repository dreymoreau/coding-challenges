// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// split into an array by splitting at every comma
// check if length of string is less than or equals to 2, return right away
// else use pop and shift array methods to remove the first and last elements
// return string using join method at every space to return the formatting as before
function array(string) {
  string = string.split(",");
  if (string.length <= 2) {
    return null;
  } else {
    string.pop();
    string.shift();
  }
  return string.join(" ");
}

console.log(array("")); // null));
console.log(array("1,2,3")); //'2');
console.log(array("1,2,3,4")); // '2 3');
console.log(array("A1,B2,C3,D4,E5")); // 'B2 C3 D4');
console.log(array("A,1,23,456,78,9,Z")); // '1 23 456 78 9');
