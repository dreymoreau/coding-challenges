// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:


  // P 
  // always will be an array of objects with a key and value pair. most values are strings and 1 value is a number. 
  // all the objects will have the same key pairs 
  
  // R 
  // returning a new key and value pair called greeting with the value being 'Hi < firstName here >, what do you like 
  // the most about < language here >?'the sentence will always return the first name and the language used both that already 
  // have been implemented in the objects
  
  // E 
  // firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'
  // ,greeting: 'Hi Madison, what do you like the most about Ruby?'
  
  // P
  // loop through the array of objects using forEach, with the callback function and the parameter of developer
  // inside the function assign developer.greeting to the string provided in the example using a template string to add 
  // the name and language in the spots that have been directed in the test case
  
  var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  

  function greetDevelopers(list) {
      list.forEach(function(developer){
          developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
      })
      return list
  }
  
  console.log(greetDevelopers(list1)) // output => 
//   [
//     {
//       firstName: 'Sofia',
//       lastName: 'I.',
//       country: 'Argentina',
//       continent: 'Americas',
//       age: 35,
//       language: 'Java',
//       greeting: 'Hi Sofia, what doyou like the most about Java?'
//     },
//     {
//       firstName: 'Lukas',
//       lastName: 'X.',
//       country: 'Croatia',
//       continent: 'Europe',
//       age: 35,
//       language: 'Python',
//       greeting: 'Hi Lukas, what doyou like the most about Python?'
//     },
//     {
//       firstName: 'Madison',
//       lastName: 'U.',
//       country: 'United States',
//       continent: 'Americas',
//       age: 32,
//       language: 'Ruby',
//       greeting: 'Hi Madison, what doyou like the most about Ruby?'
//     }
//   ]