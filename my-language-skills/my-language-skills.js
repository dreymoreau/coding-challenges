// You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
// Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// P
    // will always be an object with key and value pairs, the scores will always be unique and there will never be any duplicate values of scores
// R
    // returning a list of language test scores that are at least 60, in descending order
// E
    // (myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})) // => output ["Ruby", "Python"]
// P
    // declare leastSixty variable to an empty array
    // use for in loop 
    // check if results[key] => the object and each key/value pair is at greater than or equals to 60
    // if so push the key to leastSixty
    // return leastSixty, using the sort method in decending order, bracket notation with the object must be used to sort,
    // results[b] & results[a], can't just use b-a to sort
    
function myLanguages(results) {
    let leastSixty = []
    for(let key in results){
        if(results[key] >= 60){
            leastSixty.push(key)
        }
    }
    return leastSixty.sort((a,b) => results[b]-results[a])
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})) // => output ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71} )) // => ["Dutch", "Greek", "Hindi"]
