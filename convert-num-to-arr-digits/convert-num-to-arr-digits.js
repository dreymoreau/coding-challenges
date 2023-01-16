// return array that is inputted in reverse

// directly return and change .toString()
// split the string into an array
// map through the array to create a new array and make sure that the Number method is inside of the parentheses to ensure each element 
// will be outputted as a number datatype, without it they will be strings
// reverse the array

function digitize(n) {
    return n.toString().split('').map(Number).reverse()
  }

  console.log(digitize(35231));
//   output => [1,3,2,5,3]