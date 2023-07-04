// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// check first if str == "" return true if so
// declare result variable and make sure that all letters in the string being passed is lowercase
// declare obj variable assigned to an empty object
// for loop through using the length of result
// assign each letter in the string to either be + 1 if they repeat or is 1 if they show up one time
// declare arr variable outside of for loop and assign it to Object.entries passing in obj which turns each key/value pair into its own array
// sort arr in descending order using the second element in each array
// check if the second element in the first array is greater than 1, if it is then return false, if not return true

function isIsogram(str){
    if(str == "") return true
    let result = str.toLowerCase()
    let obj = {}
    for(let i = 0; i < result.length; i++){
        obj[result[i]] = obj[result[i]] ? obj[result[i]] + 1 : 1
    }
    
    let arr = Object.entries(obj)
    
    arr.sort((a,b) => b[1] - a[1])
      if(arr[0][1] > 1){
          return false
      }
      return true
  }
  
  // alternate answer

  // reassign str to str.toLowerCase() .split('') and sort the letters alphabetically
  // for loop through using the length and - 1 so that it would stop at the second last element in the array
  // check if str[i] == str[i+1], which would be the next element, return false if so
  // outside of the for loop return true
  function isIsogram(str){
    str = str.toLowerCase().split('').sort()
    console.log(str)
    for(let i = 0; i < str.length-1; i++){
        if(str[i] == str[i+1]) {
            return false
        }
    }
    return true
  }
  console.log(isIsogram("moOse")) // false
  console.log(isIsogram("Dermatoglyphics")) // true