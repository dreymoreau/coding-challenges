// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// declare nums variable to empty array
// for loop with the condition to the length of the parameter
// push elements to nums array using parseFloat and stringarray[i]
// return nums

function toNumberArray(stringarray){
    let nums = []
    for(let i = 0; i < stringarray.length; i++) {
        nums.push(parseFloat(stringarray[i]))
    }
    return nums
}

console.log(toNumberArray(["1.1", "2.2", "3.3"])) // output => [1.1, 2.2, 3.3]