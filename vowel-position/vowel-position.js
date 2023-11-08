// if position is less than 0 return false directly
// declare vowels variable assigned to given vowels, use split method
// reassign string to ensure that the elements are lowercased
// check if vowels includes string, using charAt() method and passing in position, this will check if the string at the given position number includes a vowel return true if so
// return false if not

function checkVowel(string, position) {
    if(position < 0){
      return false
    }
    let vowels = 'aeiou'.split('')
    string = string.toLowerCase()
    if(vowels.includes(string.charAt(position))){
       return true
     }
    return false
  };