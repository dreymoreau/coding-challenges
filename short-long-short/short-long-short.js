// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// declare arr variable set to an empty array
// check which length is smaller a or b, push the smallest
// check which length is largest a or b, push the largest
// check which length is smaller a or b, push the smallest
// return arr and use join method

function solution(a, b) {
  let arr = [];
  if (a.length < b.length) {
    arr.push(a);
  } else {
    arr.push(b);
  }
  if (a.length > b.length) {
    arr.push(a);
  } else {
    arr.push(b);
  }
  if (a.length < b.length) {
    arr.push(a);
  } else {
    arr.push(b);
  }
  return arr.join("");
}
console.log(solution("13", "200")); // '1320013');)
console.log(solution("45", "1")); // '1451');)

// refactored version
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}
