// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// declare sorted variable assigning it to obj, use sort method, with a & b arguments use them to access the object and sort in descending order based off of the a key, meaning b.a would come first, using the b argument and then the a key to sort in descending order
// return sorted
  let list = [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

function sortList (obj) {
    let sorted = obj.sort((a,b) => b.a - a.a)
    return sorted
}
console.log(sortList(list))