// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are 
// rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given 
// ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your 
// task is to implement a method that accepts an array of strings containing fruits should returns 
// an array of strings where all the rotten fruits are replaced by good ones.

// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// check if the length of the array is 0 return an empty array
// return map through and replace the word 'rotten' with an empty string then use toLowerCase() method 
// to make sure the fruits are all lowercased

function removeRotten(bagOfFruits){
  if(bagOfFruits.length == 0) {
      return []
  }
  return bagOfFruits.map(fruit => {
         return fruit.replace('rotten', '').toLowerCase();
  })
}
console.log(removeRotten(["apple","rottenBanana","kiwi"])) //output => ["apple","banana","kiwi"]