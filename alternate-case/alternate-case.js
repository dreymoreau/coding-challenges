// Write function alternateCase which switch every letter in string from 
// upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// declare output variable to an empty string
// for loop through
// check if s[i] equals s[i] .toUpperCase(), if so then add it to the output 
// string but lowercase the letter
// else add it to the output string and uppercase the letter
// return output

function alternateCase(s) {
    let output = ''
 for(let i = 0; i < s.length; i++){
     if(s[i] == s[i].toUpperCase()){
         output += s[i].toLowerCase()
     } else {
         output += s[i].toUpperCase()
     }
 }
 return output
}

console.log(alternateCase("abc")) // "ABC");
console.log(alternateCase("ABC")) //"abc");
console.log(alternateCase("Hello World")) // "hELLO wORLD"); 