// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. If you get 
// an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// check first if the array has no elements in it return an empty array
// declare smallest variable assigning it to getting the smallest element in the array using Math.min and spread operator
// declare index variable assigning it to the index of the element that is the smallest in the array using the smallest variable
// return and filter the numbers that dont equal the element that is stored in the index variable

function removeSmallest(numbers) {
    if(numbers.length == 0){
        return [];
    }
    
    let smallest = Math.min(...numbers)
    let index = numbers.indexOf(smallest)
    return numbers.filter((x, i) => i != index)
}

console.log(removeSmallest([1, 2, 3, 4, 5])) // output => [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])) // output => [5, 3, 2, 4]