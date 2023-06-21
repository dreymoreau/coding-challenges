// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// declare obj variable to empty obj
// string.split('')
// check if string.length == 0, return an empty object
// for loop through
// use ternary operator with obj[string[i]] to either be + 1 or is 1
// return obj


function count(string) {
    let obj = {}
    string.split('')
    if(string.length == 0){
        return {};
          }
    for(let i = 0; i < string.length; i++){
      obj[string[i]] = obj[string[i]] ? obj[string[i]] + 1 : 1
    }
    return obj
  }
  console.log(count('ABC')) // output => {'A': 1, 'B': 1, 'C': 1}