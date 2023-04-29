// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
// If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// declare evens array
// declare onlyEven variable assigning it to string.split('')
// loop through using the counter as i+=2
// push onlyEven[i] to evens array
// check if length of onlyEven is less than 2 or greater than 100, return 
// 'invalid string' if so
// return evens

function evenChars(string) {
    let evens = []
    let onlyEven = string.split('')
    for(let i = 1; i < onlyEven.length; i+=2){
            evens.push(onlyEven[i])
    }
    if(onlyEven.length < 2 || onlyEven.length > 100){
        return 'invalid string'
    }
    return evens
}

console.log(evenChars ("1234")) //output => ["2", "4"]