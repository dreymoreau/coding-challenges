// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// declare vowels variable assigned to aeiou and use split method
// declare str variable assigned to empty array
// for loop
// if statement and use falsey to only get the letters that arent aeiou lowercased, push to str
// return str and use join method to output as a string

function shortcut(string) {
  let vowels = "aeiou".split("");
  let str = [];
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      str.push(string[i]);
    }
  }
  return str.join("");
}
