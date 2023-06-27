// how to sort this for >= 60 and sort in descending order

// try in a code editor before looking at answer (((pssst for in loop)))
 
 // declare onlySixty variable to an empty array
 // use for in loop
 // declare key variable inside for in loop
 // check if obj[key] >= 60
 // push all the keys to onlySixty array
 // return onlySixty array but sort the keys in descending order based on their values
 function sortSixty(obj){
    let onlySixty = []
   for(let key in obj) {
   if(obj[key] >= 60) {
       onlySixty.push(key)
   }
}
return onlySixty.sort((a,b) => obj[b] - obj[a])
}

console.log(sortSixty({"Java" : 10, "Python" : 65, "Ruby" : 80}))


//  how to turn this 
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

// to this?

// usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }

//   how to have it print out 'chief officer: Dan' using a for in loop?
// how to have it print out 'Lily: Computer Engineering' using a for in loop?

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