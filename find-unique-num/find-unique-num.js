// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. 
// The numbers are always valid integer values between 1 and 2147483647, so no need for type 
// and error checking. The array contains at least one number and may contain millions of numbers. 
// So make sure your solution is optimized for speed.

// sort
// loop through
// if i-1 & i+1 arent the same return numbers[i]
function findUnique(numbers){
    numbers.sort((a,b) => a - b)
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i-1] != numbers[i] && numbers[i+1] != numbers[i]){
            return numbers[i]
        }
    }
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8])) // output =>  6
console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ])) // output => 1