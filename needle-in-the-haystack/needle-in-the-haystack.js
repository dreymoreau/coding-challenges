// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

//for loop to through arrays length
// if statement if haystack[i] == 'needle'
// return 'found the needle at position' and then add index
function findNeedle(haystack) {
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] == 'needle'){
          return 'found the needle at position ' + i
        }
    }
  }
  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
  console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))