// You'll be passed an array of objects (list) - you must sort them in descending order based off of the 'a' key.

// declare sorted variable assigning it to the list obj
// sort in descending order using key 
// return sorted
let list = [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
  ]
  function sortList (obj) {
      let sorted = list.sort((a,b) => b.a - a.a)
      return sorted
  }
  
  console.log(sortList(list)) // output => [
  //   {"a": 4, "b": 12},
  //   {"a": 3, "b": 2},
  //   {"a": 2, "b": 40},
  //   {"a": 1, "b": 3}
  // ]