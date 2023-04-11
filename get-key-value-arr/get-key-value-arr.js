// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// P
    // will always be an object being passed in, with key and value pairs
// R
    // returning the keys in one array and the values in another array
// E
    //{a: 1, b: 2, c: 3})) // output => [['a', 'b', 'c'], [1, 2, 3]]
// P
// declare two variables keys and values to empty arrays
//for in loop
//push keys to first array
//push values to second array
// return keys and values inside of an array as its own elements

function keysAndValues(data){
    let keys = []
    let values = []
    for (let key in data){
          keys.push(key)
          values.push(data[key])
    }
    return [keys,values]
  }
  
  console.log(keysAndValues({a: 1, b: 2, c: 3})) // output => [['a', 'b', 'c'], [1, 2, 3]]