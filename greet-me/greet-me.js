// Write a method that takes one argument as name and then greets that name, 
// capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// declare capital variable, assigning it to name.charAt(0).toUpperCase() 
// then add the rest of the name using name.slice(1).toLowerCase
// return using a template literal saying `Hello ${capital}`

function greet(name) {
    let capital = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${capital}!`
}

console.log(greet('riley')) //'Hello Riley!'))