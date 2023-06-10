// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ];
  
  // declare options variable set to an empty object
  // for loop through
  // assign options[list[i].meal] to either be +1 or 1 if there is only 1
  // this will loop through and continue to add 1 to the key value until it fully loops through
  // return options
  
  function orderFood(list) {
      let options = {}
      for(let i = 0; i < list.length; i++){
          options[list[i].meal] = options[list[i].meal] ? options[list[i].meal] + 1 : 1
      }
      return options
  }
  
  
  console.log(orderFood(list1)) // output => { vegetarian: 2, standard: 1, vegan: 1 }