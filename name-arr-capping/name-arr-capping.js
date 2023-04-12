// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example
// P
    // will always be an array with elements inside of it. it isn't specified how many elements will be in the array 
    // but i am assuming that the length will be at least 1
// R
    // returning the names in the array, having the first letter capitalized and the rest of the name being lowercase. 
    // making sure that it is being taken into account that some elements may not already have lowercase letters as the 
    // rest of their name
// E
    // capMe(['jo', 'nelson', 'jurie']))  // returns ['Jo', 'Nelson', 'Jurie']
// P
    // for loop through
    // if names[0]
    // use names[i] to then assign names[i].charAt(0) and toUpperCase()
    // to get the rest of the name though we need to use names[i] again, using slice(1).toLowerCase()
    
    function capMe(names) {
        for(let i = 0; i< names.length; i++){
            if(names[0]){
            names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase()
            }
        } 
        return names
    }
    console.log(capMe(['jo', 'nelson', 'jurie']))  // returns ['Jo', 'Nelson', 'Jurie']
    console.log(capMe(['KARLY', 'DANIEL', 'KELSEY'])) // returns ['Karly', 'Daniel', 'Kelsey'])