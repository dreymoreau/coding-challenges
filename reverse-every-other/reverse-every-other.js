// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
// while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// P
    // will always be a string passed in, nothing else, no numbers, no special characters, always a string of words
// R
    // returning every other word reversed
// E
    // "Reverse this string, please!")) // => output "Reverse siht string, !esaelp"
// P
    // declare new variable and assign it to str parameter being split
    // for loop starting counter at 1 and i being += 2 to only access every other element
    // assign reversed[i] to reversed[i] using split, reverse, join methods
    // outside of the for loop return and join again at each space and using trim method to make sure all whitespace is removed 
    
    function reverse(str){
        let reversed = str.split(' ')
        for(let i = 1; i < reversed.length; i += 2){
            reversed[i] = reversed[i].split('').reverse().join('')
        }
        return reversed.join(' ').trim()
      }
      console.log(reverse("Reverse this string, please!")) // => output "Reverse siht string, !esaelp"