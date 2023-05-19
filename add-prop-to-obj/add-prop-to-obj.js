// Your task is to add a new property usersAnswer to every 
// object in the array questions. The value of usersAnswer 
// should be set to null. The solution should work for array 
// of any length.

let questions = [
    {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// loop through using forEach loop
// use parameter of forEach to loop through each object and assign userAnswers to null 
// return arr which is the questions array of objects
function addProp(arr){
    arr.forEach(obj => {
        obj.userAnswers = null
    })
    
    return arr
}
console.log(addProp(questions)) // output => let questions = [
//     {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     userAnswers = null  
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//     userAnswers = null
// }];