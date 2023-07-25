// Help Suzuki rake his garden!

// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.

// You will be given a string representing the garden such as:

// reassign garden to garden.split(' ')
// declare arr variable to empty array
// declare words variable to an array with 'gravel' and 'rock'
// for loop 
// check if the strings in words is in garden[i] push to arr
// else push 'gravel' where the words arent the words in the words array
// return arr and use join method to join it back into a string

function rakeGarden(garden) {
    garden = garden.split(' ')
    let arr = []
    let words = ["gravel", "rock"]
    for(let i = 0; i < garden.length; i++ ){
      if(words.includes(garden[i])) {
          arr.push(garden[i])
      } else {
        arr.push('gravel')
        }
      }
    return arr.join(' ')
  }

  console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel')) // output "gravel gravel rock gravel gravel gravel gravel gravel gravel gravel"

  // other solution

  function rakeGarden(garden) {
    return garden.split(' ').map(item => item === 'rock' ? 'rock' : 'gravel').join(' ')
    }
   