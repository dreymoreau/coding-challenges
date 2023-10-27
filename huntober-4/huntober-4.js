// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// declare obj variable set to an empty object
// declare sum variable set to 0
// use forEach loop to create key value pairs based off elements in the array for the object
// use for in loop, to loop through obj to check if the value of the key equals 1 then += to sum, have to surround key using the Number method since the keys are strings in the object
// outside of the for in loop return sum to get the integer of numbers that show up once in the array

function repeats(n){
    let obj = {}
    let sum = 0
    n.forEach(num => (obj[num] = (obj[num] || 0) +1))
    for(let key in obj){
        if(obj[key] == 1){
            sum += Number(key)
        }
    }
    return sum
}
console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)