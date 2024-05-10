// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// declare unique and unique2 variables assigning it to each parameter a , b. use filter method to filter out all the elements that are not in the opposite parameter. this is done by using the falsy operator ! as well as includes
// can directly return after! here i learned something new! that when using Set, it can turn into an array by using the spread operator but must be with square brackets!, the 2 arrays are concatenated together and then sorted by alphabetical order to output the final array

function diff(a, b){
    let unique = a.filter(e => !b.includes(e))
    let unique2 = b.filter(e => !a.includes(e))
    console.log(unique,unique2)
    return [...new Set(unique.concat(unique2).sort())]
  }
   console.log(diff(["a", "a", "t", "e", "f", "i", "j"],["t", "g", "g", "i", "k", "f"])) // [a, e, g, j, k]
