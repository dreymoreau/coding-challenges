// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example: "How Can Mirrors Be Real If Our Eyes Aren't Real"

//  directly return, split at each space, map through and at every first index, toUpperCase(), join back
function toJadenCase(str) {
    let newString = str.split(' ')
    newString = newString.map(
        function(word) {
        if(word[0]) {
            return word[0].toUpperCase() + word.slice(1)
        }
        })
        newString = newString.join(' ')
        return newString
}

// ** alternate way **

// function toJadenCase(str) {
//  return split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// }

console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) // => output "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(toJadenCase("wow what a life it is when everything is lowercase")) // => output "Wow What A Life It Is When Everything Is Lowercase"