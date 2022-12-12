// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// declare variable to an empty array
// for loop to loop through the array
// for every even element push it into the empty sum array
// return sum


function removeEveryOther(arr){
    let sum = []
  for(let i= 0; i < arr.length; i++){
      if (i % 2 === 0) {
          sum.push(arr[i])
      }
  }
  return sum
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))