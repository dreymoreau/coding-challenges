function reverseSlice(str) {
// declare rev variable, split into an array since its already a string, reverse then join it back into the initial string
  let rev = str.split('').reverse().join('')
//   this is unneeded aha, but abstraction! woo
  let length = str.length
//   use slice method on reversed variable and then use a for loop to push each iteration of looping through the string turned array but using -- or ++ ?? idk to skip the element in the 0th position on the next iteration and push
let arr = []
for(let i = 0; i < length; i++){
    arr.push(rev.slice(i))
}
  return arr
}


console.log(reverseSlice('123')) // ['321', '21', '1']
console.log(reverseSlice('abcde')) // ['edcba', 'dcba', 'cba', 'ba', 'a']
