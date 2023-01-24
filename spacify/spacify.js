// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// directly return split the str parameter, then join them back with a space in between the parentheses .join(' ')

function spacify(str) {
    return str.split('').join(' ')
  }
  
  console.log(spacify('hello world')) // output => 'h e l l o  w o r l d'