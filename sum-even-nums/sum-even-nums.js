// Complete the function that takes a sequence of numbers as single parameter. Your function must return the 
// sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// P
    // the input will always be a sequence of numbers, an array, they will either be ints, whole numbers, or 
    //floats, decimal numbers, also there is the possibility of negative numbers as input values
// R
    // the output will be the sum of all of the even numbers in the array into one single number
// E
    // sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // output => 30
// P
    // declare sum variable
    // use a for loop, with the condition being i <= input.length
    // use modulus to check for even numbers using input[i] % 2 === 0
    // add each number that is even in the array to the sum variable
    // return sum
    
    function sumEvenNumbers(input) {
        let sum = 0;
        for(let i = 0; i <= input.length; i++){
            if(input[i] % 2 === 0){
                sum += input[i]
            }
        }
        return sum
      }
      console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // output => 30