// Given a Hash made up of keys and values, invert the hash by swapping them.

// declare obj variable assigned to an empty object
// use for in loop to loop through hash object
// use bracket notation with obj with hash[key] in between and reassign it to key
// return obj
function invertHash(hash) {
    let obj = {}
    for(let key in hash){
        obj[hash[key]] = key
    }
    return obj
  }

  console.log(invertHash({a:"1", b:"2",c:"3"})) // {1: "a", 2: "b", 3: "c"}