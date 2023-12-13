// Given a string str, reverse it and omit all non-alphabetic characters.

//reassign str to replace all special characters and numbers with an empty string
// return str parameter using split method to turn into an array, use reverse method and join back to turn it back into a string when its returned
function reverseLetter(str) {
    str = str.replace(/[^a-zA-Z]/g, '')
    return str.split('').reverse().join('')
  }

  console.log(reverseLetter("krishan")) //"nahsirk".
  console.log(reverseLetter("ultr53o?n")) //"nortlu"