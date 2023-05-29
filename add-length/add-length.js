// What if we need the length of the words separated by a space to be added at the end of 
// that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the 
// length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// declare length array
// declare splitIt variable assigning it to str.split(' ')
// for loop through
// push to length array by using template literal to get each element in the array and their 
// length by using splitIt[i].length
// return length array

function addLength(str) {
    let length = []
    let splitIt = str.split(' ')
   //  console.log(splitIt)
    for(let i = 0; i < splitIt.length; i++){
        length.push(`${splitIt[i]} ${splitIt[i].length}`)
    }
    return length
   }
   
   
   console.log(addLength('apple ban'))  // output => ["apple 5", "ban 3"]