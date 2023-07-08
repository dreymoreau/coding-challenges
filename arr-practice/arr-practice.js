// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// alert( names ); // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

// there is objects being assigned to separate variables, john, pete, mary
// declare users variable assigning it to an array of the variables that are holding the arrays
// declare names variable assigning it to users.map(x=>x.name) to get all the name values from each object
// console.log
let users = [john, pete, mary]
let names = users.map(x => x.name)
console.log(names); // John, Pete, Mary