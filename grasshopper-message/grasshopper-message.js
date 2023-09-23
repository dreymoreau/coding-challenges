// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// if name == owner, return 'Hello Boss' else return 'Hello guest'

function greet(name, owner) {
  if (name == owner) {
    return "Hello Boss";
  } else {
    return "Hello guest";
  }
}

// optional way using ternary
function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel")); //'Hello boss'
console.log(greet("Greg", "Daniel")); //'Hello guest'
