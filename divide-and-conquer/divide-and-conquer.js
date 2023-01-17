// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

// declare total variable to 0
// loop through and add all the individual numbers together first using if statement and typeof to check if its a number
// then parseInt the string numbers and subtract them from the total amount of integer numbers that were already int
// return total

function divCon(x){
    let total = 0;
    
    for(let i = 0; i < x.length; i++) {
        if(typeof(x[i]) === 'number') {
            total += x[i]
        } else if(typeof(x[i]) === 'string') {
            total -= parseInt(x[i])
        }
    }
    return total
}

console.log(divCon([9, 3, '7', '3'])) //output => 2