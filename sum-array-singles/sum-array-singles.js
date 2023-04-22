// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
// Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// P
    // it will always be an array
// R
    // returning the numbers that only show up once, and adding them together to output a single number
// E
    // [9, 10, 19, 13, 19, 13])) // output => 19
// P
    // declare singles array
    // sort arr
    // for loop through
    // check if arr[i-1] != arr[i] && arr[i+1] != arr[i], this means that the numbers are unique
    // push to singles array
    // return singles array and use reduce method to output a whole number
    
    function repeats(arr){
        let singles = []
        arr.sort((a,b) => a-b)
        for(let i = 0; i < arr.length; i++){
            if(arr[i-1] != arr[i] && arr[i+1] != arr[i]){
                singles.push(arr[i])
            }
        }
        return singles.reduce((prev,curr) => prev + curr)
    };
    
    console.log(repeats([9, 10, 19, 13, 19, 13])) // output => 19