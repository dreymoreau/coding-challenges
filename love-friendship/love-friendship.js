// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// declare total variable, assign it to 0
// declare a variable and assign it to string a also using the .charCodeAt() string method, 
// -1 to subtract the offset since letters already have numerical values in ASCII value
// for loop through
// reassign total to += the string being passed in, using i and the a variable to check which number it is as a ASCII value
// return total

function wordsToMarks(string){
    let total = 0
    let a = 'a'.charCodeAt(0) - 1
    for(let i = 0; i < string.length; i++){
      total += string.charCodeAt(i) - a
    }
    return total
  }