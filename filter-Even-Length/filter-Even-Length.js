// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

// console.log(output); // --> ['word', 'word']

// declare arr variable and assign to words parameter and use filter method to filter only words with the length that is event
// return arr


function filterEvenLengthWords(words) {
    let arr = words.filter(x => x.length % 2 == 0)
    return arr
  }