// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

// P 
// it will only ever be an array of objects being passed in, nothing else. the list will always be inputted depending on the 
// developers who signed up first. the array of objects will never be changed or manipulated, there will always be the same key 
// value pairs inside of each object

// R
// returning the first python developer who has signed up for the event. the output should include the firstName and the country 
// that the developer is from, if there is no developer that is attending who uses python, return There will be no Python developers 
// E { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },  
//Victoria, Puerto Rico.
// P

// use for loop to loop through the array of objects
// check who is the first developer who has signed up that uses python, using every element at each index list[i] to check,
// return name and country they are from, use template string to return name and country
// if no developer uses python that has signed up return There will be no Python developers outside of for loop


var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

function getFirstPython(list) {
    
    for(let i = 0; i < list.length; i++){
        if(list[i].language === 'Python') {
            return `${list[i].firstName}, ${list[i].country}`
        }
    }
     return 'There will be no Python developers'
}


console.log(getFirstPython(list1)) //output => Victoria, Puerto Rico