// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or 
// a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings 
// sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

//declare 2 arrays, nums and words
// loop through
// check if type of is number push to nums array
// else its a word push to words array
// sort each separately
// return by concat both arrays
function dbSort(a){
    let nums = []
    let words = []
    
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'number'){
            nums.push(a[i])
        } else {
            words.push(a[i])
        }
    }
    nums.sort((a,b) => a -b)
    words.sort()
    return nums.concat(words)
   }
   
   console.log(dbSort([6, 2, 3, 4, 5])) // output => [ 2, 3, 4, 5, 6 ]
   console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])) // output => [0,2,2,"Apple","Banana","Mango","Orange"]