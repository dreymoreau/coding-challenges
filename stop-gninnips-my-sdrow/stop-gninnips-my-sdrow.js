// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). Strings 
// passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// declare moreThan variable assigning it to str.split(' '), which will split the string into an array at every space
// for loop through
// check if moreThan[i].length >= 5
// reassign moreThan[i] to split('').reverse().join('')
// return moreThan.join(' '), joining the string back at every space

function spinWords(str) {
    let moreThan = str.split(' ')
    // console.log(moreThan)
    for(let i = 0; i < moreThan.length; i++){
        if(moreThan[i].length >= 5){
           moreThan[i] = moreThan[i].split('').reverse().join('')
        }
    }
    return moreThan.join(' ')
}

console.log(spinWords("Welcome")) // output => "emocleW");
console.log(spinWords("Hey fellow warriors")) // output => "Hey wollef sroirraw"