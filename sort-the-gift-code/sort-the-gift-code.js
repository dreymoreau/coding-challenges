// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a 
// unique alphabetical character to each gift. After each gift was assigned a character, the gift 
// organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep 
// from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing 
// up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// declare chars variable assigned to an empty array
// code.split('') into an array
// for loop through
// push code[i] to chars array
// reassign chars to chars.sort() to sort in alphabetical order and then join back into one single string
// return chars

function sortGiftCode(code){
    let chars = []
    code.split('')
    for(let i = 0; i < code.length; i++){
      chars.push(code[i])
  }
  chars = chars.sort().join('')
  return chars
}

console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')) // output => 'abcdefghijklmnopqrstuvwxyz'