// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// declare variable alphabet assigned to the entire alphabet and use split method
// reassign string toLowerCase()
// return alphabet variable which is an array of letters and use the "every" array method which checks if it every element in the array passes with a boolean, here the includes method is being used as well to ensure that the entire alphabet is in fact in the string, returning true if so and false if not

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  string = string.toLowerCase();
  return alphabet.every((x) => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
