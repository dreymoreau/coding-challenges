// practice 1

// how to sort this for >= 60 and sort in descending order

// try in a code editor before looking at answer (((pssst for in loop)))

// declare onlySixty variable to an empty array
// use for in loop
// declare key variable inside for in loop
// check if obj[key] >= 60
// push all the keys to onlySixty array
// return onlySixty array but sort the keys in descending order based on their values

function sortSixty(obj) {
  let sixtyPlus = [];
  for (let key in obj) {
    if (obj[key] >= 60) {
      sixtyPlus.push(key);
    }
  }
  return sixtyPlus.sort((a, b) => obj[b] - obj[a]);
}

console.log(sortSixty({ Java: 10, Python: 65, Ruby: 80 }));

// practice 2

//  how to turn this
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function objId(obj) {
  let result = {};
  obj.forEach((item) => (result[item.id] = item));
  return result;
}
console.log(objId(users));

// declare result variable to an empty object
// use forEach loop to loop through and declare item variable inside the loop
// use the empty object result to then assign the id value by using item.id to put the name of the user in front of the entire object, then assign it to item which is holding each object
// return result

console.log(change(users));
// to this?

// usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }

// practice 3

// let spaceship = {
//     crew: {
//     captain: {
//         name: 'Lily',
//         degree: 'Computer Engineering',
//         cheerTeam() { console.log('You got this!') }
//         },
//     'chief officer': {
//         name: 'Dan',
//         degree: 'Aerospace Engineering',
//         agree() { console.log('I agree, captain!') }
//         },
//     medic: {
//         name: 'Clementine',
//         degree: 'Physics',
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna',
//         degree: 'Conservation Science',
//         powerFuel() { console.log('The tank is full!') }
//         }
//     }
// };

//   how to have it print out 'chief officer: Dan' using a for in loop?

// declare for in loop using the spaceship object but going into the second object by using dot syntax with crew
// console.log using template string the key which is the variable being used to iterate through the obj and then a space with spaceship.crew[key].name to put the name after the persons title

for (let key in spaceship.crew) {
  console.log(`${key}: ${spaceship.crew[key].name}`);
}

// how to have it print out 'Lily: Computer Engineering' using a for in loop?

// declare for in loop using the spaceship object but going into the second object by using dot syntax with crew again
// console.log using template string the spaceship.crew[key].name to output the persons name at the start and then a space with spaceship.crew[key].degree to put the persons degree after the name being separated with a colon

for (let key in spaceship.crew) {
  console.log(`${spaceship.crew[key].name}: ${spaceship.crew[key].degree}`);
}
