// Given a string made up of letters a, b, and/or c, switch the position of letters a 
// and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// P
// will always be a string made up of letters a, b and / or c

// R
// switching the position of letters a and b, always keeping the letter c where it is 
// initally situated in the argument

// E
// 'abc' => 'bac'

// P
// declare change variable to an empty array
// split x assigning it to switchIt variable
// loop through
// if switchIt[i] == a, change.push('b')
// else if switchIt[i] == b, change.push('a')
// else change.push(switchIt[i])
// return change.join('') turning it back into a string

function switcheroo(x){
    let change = []
    let switchIt = x.split('')
    for(let i = 0; i < switchIt.length; i++){
        if(switchIt[i] == 'a'){
            change.push('b')
        } else if(switchIt[i] == 'b'){
            change.push('a')
        } else {
           change.push(switchIt[i])
        }
    }
    return change.join('')
}

console.log(switcheroo('abc')) //'bac');
console.log(switcheroo('aaabcccbaaa')) //'bbbacccabbb')