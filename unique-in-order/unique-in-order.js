// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each 
// other and preserving the original order of elements.

// declare arr variable assigned to empty arr 
// for loop
// if iterable[i] !== iterable[i+1] push to arr using iterable[i]
// return arr
function uniqueInOrder(iterable){
    let arr = []
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i+1]){
            arr.push(iterable[i])
        }
    }
    return arr
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B'])))