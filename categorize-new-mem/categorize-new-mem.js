// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members 
// which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than
//  7. In this croquet club, handicaps range from -2 to +26; the better the player the lower 
// the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the 
// respective member is to be placed in the senior or open category.

// declare decide variable set to an empty array
// for each loop through
// check if data[0] >= 55 years and data[1] > 7 push 'Senior' to the total array
// else push 'Open'
// return decide

function openOrSenior(data){
    let decide = []
    data.forEach(player => {
        if(player[0] >= 55 && player[1] > 7){
            decide.push('Senior')
        } else {
            decide.push('Open')
        }
    })
    return decide
  }
  
  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) // output => ['Open', 'Senior', 'Open', 'Senior']