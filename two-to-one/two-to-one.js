// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// reassign s1 and s1 to split into an array, sort and join back
// declare spl and spl2 variables assigning it to s1 and s2 using the split method again
// declare together variable using the concat method on spl and spl2 to get one array of the whole string
// declare arr variable to empty array
// for loop 
// check if arr doesnt include together[i], push to arr if the string doesnt exist inside of the arr
// outside of the for loop return and use sort to get the string in alphabetical order and then use join 
// method to turn the array back to a string as the output
function longest(s1, s2) {
  s1= s1.split('').sort().join('')
  s2= s2.split('').sort().join('')
  let spl = s1.split('')
  let spl2 = s2.split('')
  let together = spl.concat(spl2)
  let arr = []
  for(let i = 0; i < together.length; i++){
    if(!arr.includes(together[i])){
        arr.push(together[i])
    }
  }
  return arr.sort().join('')
}
console.log(longest("aretheyhere", "yestheyarehere")) //aehrsty"