// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// declare capitalLetters variable assigning it an empty array 
// declare for loop, with the condition being to length of the word parameter
// if statement comparing word[i] to word[i].toUpperCase() to check for uppercase letters in the string
// push the indexes of the uppercase letters by using the i counter
 // return capitalLetter
 
 function capitals(word) {
	let capitalLetters = []
	for(let i = 0; i < word.length; i++) {
	    if(word[i] == word[i].toUpperCase()) {
	        capitalLetters.push(i)
	    }
	}
	return capitalLetters
}

console.log(capitals('CodEWaRs'))