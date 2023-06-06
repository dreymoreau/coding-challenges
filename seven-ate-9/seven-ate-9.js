// Write a function that removes every lone 9 that is inbetween 7s.

// declare remove variable to str.toString('').split('')
// for loop through
// if remove[i-1] == 7 && remove[i] == 9 && remove[i+1] == 7
// use splice method using i and remove 1 number wherever this condition is met
// return remove and use .join('') method

function sevenAte9(str) {
    let remove = str.toString('').split('')
    for(let i = 0 ; i < remove.length; i++){
        if(remove[i-1] == 7 && remove[i] == 9 && remove[i+1] == 7){
            remove.splice(i,1)
        }
    }
    return remove.join('')
  }
  
  console.log(sevenAte9(['7979797'])) // output => , '7777'
  console.log(sevenAte9( ['165561786121789797'])) // output =>  '16556178612178977'