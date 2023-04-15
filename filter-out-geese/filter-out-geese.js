// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// P
    // will always be an array of strings being passed in
// R
    // return the birds that are not geese, which are determined in the input, returning the birds in an array as well
// E
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) // => output ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// P
    // declare geese array with all the types of geese
    // declare notGeese array
    // for loop through
    // check if !geese includes birds[i]
    // push birds[i] to notGeese array
    // return notGeese
    
    function gooseFilter (birds) {
        let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
        let notGeese = []
        
       for(let i = 0; i < birds.length; i++){
           if(!geese.includes(birds[i])){
               notGeese.push(birds[i])
           }
       }
       return notGeese
      }
      console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])) 
      // => output ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]