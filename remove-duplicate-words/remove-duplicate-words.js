
// Output:

// 'alpha beta gamma delta'

// declare uniques array
// declare splitS variable assigning it s parameter and split(' ') at each space
// use forEach loop to loop through each element with a parameter being declared
// if statement, if !uniques.includes using parameter from forEach loop, push to uniques array
// return uniques array with join(' ') method
function removeDuplicateWords (s) {
    let uniques = []
    let splitS = s.split(' ')
    splitS.forEach(element => {
        if(!uniques.includes(element)){
            uniques.push(element)
        }
    })
    return uniques.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // output => 'alpha beta gamma delta'