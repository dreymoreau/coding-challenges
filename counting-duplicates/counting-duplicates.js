// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. The input
// string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// declare obj variable to an empty object
// declare onlyEven to text.toLowerCase() and then use split('')
// for loop through
// use ternary and assign obj[onlyEven[i]] to either be + 1 for everytime the letter shows up or is 1
// declare even variable variable to Object.values(obj) which will only assign the value from the key value pairs
// sort in descending order
// declare count variable assign to 0
// for loop through
// check if even[i] > 1, count ++
// return count

function duplicateCount(text){
    let obj = {}
    let onlyEven = text.toLowerCase().split('')
    
    for(let i = 0; i < onlyEven.length; i++){
    obj[onlyEven[i]] = obj[onlyEven[i]] ? obj[onlyEven[i]] + 1 : 1
    }
    
    let even = Object.values(obj)
    even.sort((a,b) => b - a)
    let count = 0
    for(let i = 0; i < even.length; i++){
         if(even[i] > 1){
             count++
         }
    }
    return count
  }
  console.log(duplicateCount("aabBcde")) // output => 2
  console.log(duplicateCount("Indivisibilities")) // output => 2