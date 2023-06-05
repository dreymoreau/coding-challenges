// Given a string s. You have to return another string such that even-indexed and 
// odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// declare even variable and odd variable set to empty array
// declare arr assigning it to S.split('')
// for loop through
// if i % 2 == 0 push arr[i] to even
// else push arr[i] to odd
// declare splitIt variable assigning it [even.join(''), odd.join('')]
// return splitIt using join method again at each space .join(' ')

function sortMyString(S) {
    let even = []
    let odd = []
    let arr = S.split('')
    
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            even.push(arr[i])
        } else{
            odd.push(arr[i])
        }
    }
    let splitIt = [even.join(''), odd.join('')]
    return splitIt.join(' ')
}
console.log(sortMyString("CodeWars")) // "CdWr oeas"