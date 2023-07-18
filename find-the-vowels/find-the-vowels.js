// We want to know the index of the vowels in a given word, for example, there are two vowels in the 
// word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


// declare vowels variable assigned to "aeiouy" then use split method
// declare arr variable to empty array
// reassign word parameter to word using toLowerCase() to ensure all letters in the string are lowercased 
// as well as using split method to split into an array
// for loop through
// check if any of the letters in the word parameter is in the vowels array which are vowels
// if so push i, which is the index to arr array
// declare plusOne variable assigning it to arr and using map method to add 1 to each index, since this 
// challenge is indexed at 1 and changing the i in the for loop would skip the first element
// return plusOne

function vowelIndices(word){
  let vowels = "aeiouy".split('')
  let arr = []
  word = word.toLowerCase().split('')
  for(let i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){
      arr.push(i)
    }
  }
  let plusOne = arr.map(x => x + 1)
  return plusOne
}
console.log(vowelIndices("orange")) // [1,3,6]