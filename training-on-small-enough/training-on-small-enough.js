// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//loop through a parameter using a for loop
// inside loop check if a[i] is > then limit, return false if so, if not return true outside of the for loop

function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++) {
        if(a[i] > limit){
            return false
        }
    }
    return true
}

console.log(smallEnough([66, 101], 200)) // should return true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // should return false