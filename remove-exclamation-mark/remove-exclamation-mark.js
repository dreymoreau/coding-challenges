// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// declare str variable 
// assign to str variable and use replace method to remove all characters except for letters
// return str 


function removeExclamationMarks(s) {
    let str = s.replace(/[^a-zA-Z ]/g, '')
    return str
 }
 
 console.log(removeExclamationMarks("Hello World!"))