// You will be given a sequence of objects (associative arrays in PHP) representing data about developers 
// who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

// declare continents array
// for loop through
// check if the continent property exists in the continents array by using the falsey statement
// push if it isnt
// check if the length of continents == 5
// return true if so
// return false if not
var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
  ];
  
  function allContinents(list) {
      let continents = []
      for(let i = 0; i < list.length; i++){
          if(!continents.includes(list[i].continent))
              continents.push(list[i].continent)
      }
      if(continents.length == 5){
          return true
      } else{
      return false
  }
  }
  
  console.log(allContinents(list1)) // output => true