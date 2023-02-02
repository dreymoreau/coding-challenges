// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// declare variable to empty array
//for loop through
// if typeof l[i] == 'number' push to array
// return array

/// for loop way

function filter_list(l) {
    let onlyNums = []
    for(let i = 0; i < l.length; i++){
        if(typeof l[i] === 'number'){
            onlyNums.push(l[i])
        }
    }
    return onlyNums
  }
  console.log(filter_list([1,2,'a','b'])) // => output [1, 2]

/// filter method way

function filter_list(l) {
    return l.filter(x => typeof x == 'number')
  }

  console.log(filter_list([1,2,'a','b'])) // => output [1, 2]