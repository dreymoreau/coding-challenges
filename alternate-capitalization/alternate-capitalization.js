// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


// it will always be a string, the string will always be lowercased to start off, with no spaces. 
// the parameter inside of the function will always be one parameter


// returning an array of letters that has one element (index 0) to be even letters to be capitalized 
// and the second element (index 1) to be odd letters to be capitalized


// ['AbCdEf', 'aBcDeF']


// declare an arr variable to an empty array, and arr2 variable to an empty array
// split s as one element
// for loop through, check for even indexes, if even to uppercase, else the element
// push to arr 
// declare total1 variable assigning it to arr.join('')
// repeat for the odd capitalization, push to arr2 
// declare total2 variable assigning it to arr2.join('')
// return [total1, total2]

function capitalize(s){
    let arr = []
    let arr2 = []
    s.split('')
    for(let i = 0; i < s.length; i++){
        if(i % 2 === 0){
            arr.push(s[i].toUpperCase())
        } else {
            arr.push(s[i])
        }
    }
    let total1 = arr.join('')
    for(let i = 0; i < s.length; i++){
        if(i % 2 === 1){
            arr2.push(s[i].toUpperCase())
        } else {
            arr2.push(s[i])
        }
    }
  let total2 = arr2.join('')
  return [total1, total2]
  }
  
  console.log(capitalize("abcdef")) // output => ['AbCdEf', 'aBcDeF']