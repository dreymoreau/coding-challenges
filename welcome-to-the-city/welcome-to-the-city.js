// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// check if name.length === 4, return the name and the city state
// check if name.length === 3, return the name and the city state
// else return the first and last name, city and state

function sayHello(name, city, state) {
  if (name.length == 4) {
    return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`;
  } else if (name.length == 3) {
    return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
  } else {
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
  }
}
console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona")); //'Hello, John Smith! Welcome to Phoenix, Arizona!')
console.log(sayHello(["Wallace", "Russel", "Osbourne"], "Albany", "New York")); // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')

// alternate solution

function sayHello(name, city, state) {
  let fullName = name.join(" ");
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}
