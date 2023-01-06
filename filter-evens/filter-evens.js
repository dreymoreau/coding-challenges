//declare onlyEvens variable and assign it the numbersArray parameter using the filter method, passing in an argument that only selects
// the elements that are divisible by 2 === 0 using the modulus
// return the onlyEvens variable

function getEvenNumbers(numbersArray){
    let onlyEvens = numbersArray.filter(x => x % 2 === 0)
    return onlyEvens
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])) // output => [2, 4, 6]