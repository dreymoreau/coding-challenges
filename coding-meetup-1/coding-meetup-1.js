// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// P
    // will always be an array of objects that represents different data from the developers that are attending the coding meetup. the input will never be anything else but an array of objects
// R
    // returning a whole number of how many javascript developers are from europe. the output will always be a whole number, a positive number and nothing else. the developers will always be counted if they are javascript developers and from europe

// E
// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// this would output 1 developer that is attending from europe, if we check the test case being used, there are no other developers that are attending the coding meetup that is from europe
// P

// declare total variable set to 0
//for loop
// if developer is a JavaScript developer and is from Europe total ++
// return total

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
    let total = 0
  list.forEach(function(developer){
      if(developer.language === 'JavaScript' && developer.continent === 'Europe'){
          total++
      }
  })
  return total
}
countDevelopers(list1) // output => 1