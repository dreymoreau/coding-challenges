// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// declare count variable to 0
// for loop through
// if x[i] === 'n', increment count by 1
// outside of the for loop and if statement, using a ternary operator return if count is greater than 15 'Car Dead', if not 'Woohoo'
function bump(x){
    let count = 0
     for(let i = 0; i < x.length; i++) {
         if (x[i] === 'n'){
             count++
         }
     }
     return count > 15 ? 'Car Dead' : 'Woohoo!'
    
     // ** alternate way **
  //   return x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!'
  }
  
  console.log(bump("__nn_nnnn__n_n___n____nn__nnn")) // => output 'Woohoo!'