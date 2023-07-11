// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// declare vowels array to ['a','e','i','o','u']
// declare str variable assigned to string.split('')
// for loop
// if vowels includes str[i]
// reassign str[i] = str[i].toUpperCase()
// else reassign str[i] = str[i]
// return str.join('')

function swap (string) {
    let vowels = ['a','e','i','o','u']
  //   if(string = [])
    let str = string.split('')
    for(let i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
         str[i] = str[i].toUpperCase()
      } else {
        str[i] = str[i]
      }
    }
    return str.join('')
  }
  console.log(swap("HelloWorld!")) // "HEllOWOrld!"