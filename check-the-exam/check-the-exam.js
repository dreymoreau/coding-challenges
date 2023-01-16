// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// declare variable called totalOutput
// loop through using a for loop, the length of array1
// if array1[i] equals array2[2] then add 4 to totalOutput
// if array2[i] equals an empty string -= 0
// else -= 1
// if totalOutput is less than 0, totalOutput equals 0
// return totalOutput
function checkExam(array1, array2) {
    let totalOutput =0;
    
    for(let i=0; i < array1.length; i++) {
            if(array1[i] === array2[i]){
                totalOutput +=4
            } else if(array2[i] === ''){
                totalOutput -= 0
            } else {
                totalOutput -=1
            }
    }
    if(totalOutput < 0) {
        totalOutput = 0
    }
    return totalOutput
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))// output 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) //output 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //output 16