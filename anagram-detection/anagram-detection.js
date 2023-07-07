// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

function isAnagram (test, original) {
    let arr = test.toLowerCase().split('')
    arr.sort()
    let arr2 = original.toLowerCase().split('')
    arr2.sort()
    return arr.join('') === arr2.join('')
}
console.log(isAnagram("foefet", "toffee"))// true)
console.log(isAnagram("dumble", "bumble"))// false
console.log(isAnagram("ound", "round"))// false,