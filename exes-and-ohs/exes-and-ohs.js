// Check to see if a string has the same amount of 'x's and 'o's. The method must return a 
// boolean and be case insensitive. The string can contain any char.

// declare x variable to empty array
// declare o variable to empty array
// str.split('')
// loop through
// if str[i] == 'x' or 'X' push to x array
// else if str[i] == 'o' or 'O' push to o array
// outside of the loop check if x.length == o.length, return true if so, return false if not

function XO(str){
    let x = []
    let o = []
    str.split('')
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'x' || str[i] == 'X'){
            x.push(str[i])
        } else if(str[i] == 'o' || str[i] == 'O'){
            o.push(str[i])
        }
    }
    
    if(x.length == o.length){
        return true
    }
    return false
}
console.log(XO('xo')) // output => true
console.log(XO("xxOo")) // output => true