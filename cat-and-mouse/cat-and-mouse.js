// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// reassign x to x.split('')
// declare dots variable to 0
// for loop through
// if x[i] == '.'
// dots++
// outside of the for loop use a if statement to check if dots is greater than 3, if so return 'Escaped!'
// if not return 'Caught!'

function catMouse(x){
    x = x.split('')
    let dots = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] === '.'){
            dots++
        }
    }
       if(dots > 3) {
           return 'Escaped!'
       }
       return 'Caught!'
   }
   console.log(catMouse('C....m')) //"Escaped!");
   console.log(catMouse('C..m')) //"Caught!");
   console.log(catMouse('C.....m')) // "Escaped!");