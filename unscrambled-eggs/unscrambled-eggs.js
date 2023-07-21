// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. 
// You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice regular expressions, so commenting would 
// be appreciated.

// reassign word to word.split('')
// for loop through
// check if word[i] == 'e' && word[i+1] == 'g' && word[i+2] == g
// if it does use splice method, to remove it by using i as the first parameter and 3 as the second, 
// which allow for the word to be removed wherever it shows up in the string and to remove all 3 elements
// outside of the for loop return and use join('') method to have the output as a string once again
function unscrambleEggs(word){
    word = word.split('')
    for(let i = 0; i < word.length; i++){
      if(word[i] == 'e' && word[i+1] == 'g' && word[i+2] == 'g'){
        word.splice(i,3)
      }
    }
    return word.join('')
}
console.log(unscrambleEggs("ceggodegge heggeregge")) // "code here");)
console.log(unscrambleEggs("FeggUNegg KeggATeggA")) //,"FUN KATA"))