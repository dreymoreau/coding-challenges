// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// declare arr variable assigned to an array
// for loop
// if i % 3 == 0, i % 5 == 0, push 'FizzBuzz' to arr
// else if i % 3 == 0, push 'Fizz' to arr
// else if i % 5 == 0, push 'Buzz' to arr
// else push i to arr
// return arr 
function fizzBuzz(n){
    let arr =[]
    for(let i = 1; i<= n;i++){
        if(i%3==0 && i%5==0){
            arr.push('FizzBuzz')
        } else if(i%3==0){
           arr.push('Fizz')
        } else if(i%5==0){
            arr.push('Buzz')
        } else {
           arr.push(i)
        }
    }
    return arr
}
console.log(fizzBuzz(15))