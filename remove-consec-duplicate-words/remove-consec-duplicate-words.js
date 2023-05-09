// Your task is to remove all consecutive duplicate words from a string, leaving only 
// first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// declare nonRepeat variable assigning it to string.split(' ')
// declare noRepeat to an empty array
// loop through
// check if nonRepeat[i] !== nonRepeat[i+1] which would be the next index
// if the elements arent the same consecutively, push to the noRepeat array
// reutnr noRepeat and use .join(' ') method to turn it back into a string

function removeConsecutiveDuplicates(string) {
    let nonRepeat = string.split(' ')
    let noRepeat = []
    
    for(let i = 0; i < nonRepeat.length; i++){
        if (nonRepeat[i] !== nonRepeat[i+1]){
            noRepeat.push(nonRepeat[i])
        }
    }
  return noRepeat.join(' ')
}

console.log(removeConsecutiveDuplicates(
			"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")) 
            // output => "alpha beta gamma delta alpha beta gamma delta"