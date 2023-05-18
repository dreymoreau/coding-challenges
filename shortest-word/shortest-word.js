// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// declare sorted variable assigning it to s.split(' ')
// for loop through
// return Math.min using spread operator, then map through to get the number of the smallest string length

function findShort(s){
    let sorted = s.split(' ')
    for(let i = 0 ; i < sorted.length; i++){
        return Math.min(...sorted.map(o => o.length))
    }
  }
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps")) // output => 3