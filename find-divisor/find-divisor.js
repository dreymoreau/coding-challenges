// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the 
// integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

// P
    // the input will always be a whole number
// R
    // returning an array of all the integers that are the numbers divisors, returning into an array
// E
    // divisors(15)) // output => [3, 5]
// P
    // declare empty array
    // for loop from 2 to integer
    // check if integer is divisible by i
    // push to the array if so
    // return array using ternary operator to either return the array of divisors or to output that the number is indeed a prime number
    
    function divisors(integer) {
        let divisor = []
        for (let i = 2; i < integer; i++){
            if(integer % i === 0){
            divisor.push(i)
            }
        }
          return divisor.length ? divisor : (`${integer} is prime`);
      };
      console.log(divisors(15)) // output => [3, 5]
      console.log(divisors(13)) // output => "13 is prime"