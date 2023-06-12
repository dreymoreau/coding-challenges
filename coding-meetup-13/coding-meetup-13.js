// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:

var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
  ];
  
  // declare lang variable assigned to an empty obj
  // loop through
  // reassign lang[list[i].language] to either being +1 or 1 if there is only 1 of those languages in the array of objects
  // outside of the for loop, declare arr assigned to Object.values(lang) which creates an array based off the values from the lang object
  // declare min variable set to the smallest number in the array using spread operator
  // declare max variable set to the largest number in the array using spread operator
  // return max <= (min * 2) to see if the languages are 2 times higher than the other languages or not, return true if its less than 2 times higher, return false otherwise
  
  function isLanguageDiverse(list) {
    let lang = {}
    for(let i = 0; i < list.length; i++){
        lang[list[i].language] = lang[list[i].language] ? lang[list[i].language] +1 : 1
    }
    let arr = Object.values(lang)
    console.log(arr)
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return max <= (min * 2)
  }
  
  console.log(isLanguageDiverse(list1)) // output => false