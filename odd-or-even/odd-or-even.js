// Title: Odd or Even

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// declare sum variable inside of the oddOrEven function
// declare for loop and set i less then the length of the array parameter, inside of the for loop add the elements inside
// of the array that will be passed in to the sum variable by selecting the entire index array[i] ** make sure to close the for loop
// before starting the conditional statements or it will be undefined
// write if statement comparing the sum variable to if it is divisible by 2 using the modulus, then return "even"
// other than that return "odd"

function oddOrEven(array) {
    let sum = 0;
     
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
      }
        if(sum % 2 == 0) {
            return "even";
        }
        return "odd";
 }