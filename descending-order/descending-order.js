// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits 
// to create the highest possible number.

// declare descend assigning it to n.toString().split('')
// loop through
// sort in descending order
// return descend.join('') surrounding it with the Number method to ensure the output will be a number

function descendingOrder(n){
    let descend = n.toString().split('')
    for(let i = 0; i < descend.length; i++){
        descend.sort((a,b) => b - a)
    }
    return Number(descend.join(''))
}

console.log(descendingOrder(123456789)) // output =>  987654321