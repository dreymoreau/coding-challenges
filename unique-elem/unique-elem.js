
// taking in a string with different words inside of it, repeating
// remove all duplicate elements from the string and return it as a string
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' turns to this 'alpha beta gamma delta'
// declare unique variable assigned to an empty array
// reassign str to split at every element space
// for loop through
// check if the statement is falsy with unique including elements from the str parameter then push to unique, else dont 
// return unique and use join method to join it back into a string, with a space in between (' ')

function rmDuplicateWords (str){
    let unique = []
    str = str.split(' ')
    for(let i = 0; i< str.length; i++){
        if(!unique.includes(str[i])){
            unique.push(str[i])
        }
    }
    return unique.join(' ')
}
console.log(rmDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // 'alpha beta gamma delta'
