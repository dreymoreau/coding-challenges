// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];
  
  // declare total variable set to 0
  // for loop through
  // total += list[i].age
  // outside of the for loop declare a variable called avg, assigning it to total / list.length 
  // return avg, surrounding it using Math.round() to round to the nearest integer
  
  function getAverageAge(list) {
    let total = 0; 
    for(let i = 0; i < list.length; i++){
        total += list[i].age
    }
    let avg = total / list.length
    return Math.round(avg)
  }
  console.log(getAverageAge(list1)) // output => 50