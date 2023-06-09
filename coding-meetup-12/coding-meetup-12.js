// write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

var list1 = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ];
  
  // declare only variable set to an empty array
  // for loop through
  // check if list[i].language == lang and list[i].githubAdmin == 'yes'
  // push list[i] to only array
  // return only array
  
  function findAdmin(list, lang) {
      let only = []
      for(let i = 0; i < list.length; i++){
           if(list[i].language == lang && list[i].githubAdmin == 'yes' ){
            only.push(list[i])
        }
      }
      return only
  }
  
  console.log(findAdmin(list1, 'JavaScript'))