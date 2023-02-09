// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


// directly return, splitting into an array, reversing all the letters, then joining it back, this will have the order backwards
// split it into an array again with a space to split it at every space, reverse the order using the reverse method, 
//join with a space to maintain the spaces that were present before

function reverseWords(str) {
 return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords("This is an example!")) //==> "sihT si na !elpmaxe"