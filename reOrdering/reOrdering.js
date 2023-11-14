// There is a sentence which has a mistake in its ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering

// declare capWord & nonCapWord variable assigned to an empty array
// reassign text parameter to split at each word into an array
// for loop through
// check if text[i][0] == text[i][0].toUpperCase(), this will check which element is the word with the uppercase, push the element to capWord array
// else push rest of the elements to nonCapWord array
// declare finalStr and assign it to capWord using the concat method passing in nonCapWord
// return finalStr and use join method with a space in between parentheses to join the array back into a string 

function reOrdering(text){
    let capWord = []
    let nonCapWord = []
    text = text.split(' ')
    for(let i = 0; i < text.length; i++){
        if(text[i][0] == text[i][0].toUpperCase()){
            capWord.push(text[i])
        } else {
            nonCapWord.push(text[i])
        }
    }
    let finalStr = capWord.concat(nonCapWord)
    return finalStr.join(' ')
  }
  
  console.log(reOrdering('ming Yao')) // 'Yao ming'
  console.log(reOrdering('Mano donowana')) //'Mano donowana'
  console.log(reOrdering('wario LoBan hello')) //'LoBan wario hello'