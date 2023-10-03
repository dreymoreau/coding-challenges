// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// declare obj variable to an empty obj
// use forEach method to get key value pairs for the elements in the array with the starting point being 0 and adding +1 to every time it occurs
// declare arr variable assigning it to Object.values which will put all the values from the keys into an array, pass in obj
// sort in ascending order
// check if in the 0th index there is a number 2 and in the first index there is a number 3, if so return true, else return false

function checkThreeAndTwo(array) {
  let obj = {};
  array.forEach((num) => (obj[num] = (obj[num] || 0) + 1));
  let arr = Object.values(obj);
  arr.sort((a, b) => a - b);
  if (arr[0] == 2 && arr[1] == 3) {
    return true;
  }
  return false;
}
