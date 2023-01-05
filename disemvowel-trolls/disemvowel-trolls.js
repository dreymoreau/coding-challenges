// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// a string
// return the string without any vowels, y, doesn't count as a vowel here
// assign str to a variable called withoutVowels, splitting it into an array, mapping through, if there are vowels, a, e, i, o, u, remove them by replacing them with '', join the array back into a string
// return withoutVowels variable

function disemvowel(str) {
    let withoutVowels = str.split('').map(x => x.replace(/[aeiouAEIOU]/g, "")).join('')
   return withoutVowels
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) 
// output => N ffns bt, Yr wrtng s mng th wrst 'v vr rd
console.log(disemvowel('you are not good enough')) // output => y r nt gd ngh