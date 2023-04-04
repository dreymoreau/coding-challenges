// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// P
    // will always be an array of objects which represents the data about developers attending the event. the keys will always be the same for each developer, with different possible value pairs
// R
    // returning true if all the developers that signed up are using the same language, else returning false if their are developers using different languages
// E
    // list1 array, having 3 developers all use the same language 'JavaScript'
// P
    // for loop through and check if each developer is using the same language by comparing the first index and the rest of the objects indexes of the language key return false if not, outside of the for loop return true
    
    var list1 = [
        { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
      ];
      
      var list2 = [
        { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
        { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
        { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
      ];
      
      function isSameLanguage(list) {
        for(let i = 0; i < list.length; i++){
            if(list[0].language !== list[i].language){
                return false
            }
        }
        return true
      }
      
      console.log(isSameLanguage(list1)) //output => true
      console.log(isSameLanguage(list2)) //output => false