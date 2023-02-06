// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// directly return, split, reverse, join
// split into an array again with a space in between the parentheses
// reverse it once again to get all the words back into its original order
// join the array back into a string with a space in the double quotes parentheses 
// to add a space between the words

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
          
  }
  console.log(reverseWords("This is an example!")) //output => "sihT si na !elpmaxe"