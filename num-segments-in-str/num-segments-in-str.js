/**
 * @param {string} s
 * @return {number}
 */
// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// declare total variable and assign to 0
// declare split variable and assign to s string and use split method with a space
// for loop
// check if split length is '', if so use continue statement which does not terminate the execution of the loop and continues to run through to the next statement being the else statement
// if the length of the string isnt '' then total++
// outside of the for loop return total

var countSegments = function (s) {
  let total = 0;
  let split = s.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split[i].length == "") {
      continue;
    } else {
      total++;
    }
  }
  return total;
};
