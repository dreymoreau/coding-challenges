// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// check first if nums is empty or null value, if so return an empty array
// directly return using sort method
function solution(nums){
    if (nums == null ) {
        return []
    }
return nums.sort((a,b) => a-b)
}
console.log(solution([20, 2, 10])) // => output [2,10,20]