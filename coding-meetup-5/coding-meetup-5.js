// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about 
// developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of 
// each coding language represented at the meetup.

// For example, given the following input array:

// P
    // the input will always be an array of objects and nothing but that, the key and value pairs of each object 
    // will be the same, in the same order
// R
    // returning the count of the languages being used by the developers that are attending the meetup
// E
    // { C: 2, JavaScript: 1, Ruby: 1 }
// P
    // declare an empty count obj
    // for loop with a callback function
    // if count[lang.language] => truthy
    // increase the language by 1, if there are more than one developer using that language attending the event
    // else count[lang.language] = 1 since there is only 1 developer using the language that is attending the event
    // return the count obj

    var list1 = [
        { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
        { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
        { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
        { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
      ];
      
      function countLanguages(list) {
          let count = {}
        list.forEach(function(lang){
            if(count[lang.language]){
                count[lang.language] ++
            } else {
                count[lang.language] = 1
            }
        })
        return count
      }
      console.log(countLanguages(list1)) // output => {C: 2, JavaScript: 1, Ruby: 1}