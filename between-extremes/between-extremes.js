// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

// P
    // the input will always be an array, the array will always have at least elements inside of it and will never be empty
// R
    // returning the largest number in the array minus the smallest number in the array, outputting 1 number
// E
    // [44,3,5,2,557,101]) 557-2 = 555
// P
    // declare a variable called total, setting it to 0
    // sort the array in ascending order
    // for loop through, using the length as the condition
    // inside the for loop, assign total to numbers (last element), using the last element method rather than 
    // hard coding in an index, - the first element in the array which will always be the smallest, since the array was sorted previously
    // return total
    
    function betweenExtremes(numbers) {
        let total = 0
        numbers.sort((a,b) => a-b)
        for(let i = 0; i < numbers.length; i++){
            total = (numbers[numbers.length - 1] - numbers[0])
        }
        return total
    }
    
    console.log(betweenExtremes([44,3,5,2,557,101])) //output => 557 - 2 = 555