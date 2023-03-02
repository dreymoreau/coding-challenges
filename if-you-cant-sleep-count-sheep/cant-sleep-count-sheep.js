// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// declare sheepCounter variable to empty string
// for loop setting i to 1 and the condition to num
// sheepCounter += i and sheep... (using a template string)
// return sheepCounter

function countSheep(num) {
    let sheepCounter = ''
    for(let i = 1; i <= num; i++){
        sheepCounter += `${i} sheep...`
    }
    return sheepCounter
}
console.log(countSheep(2)) // output => "1 sheep...2 sheep..."