function getEvenNumbers(numbersArray){
    let onlyEvens = numbersArray.filter(x => x % 2 === 0)
    return onlyEvens
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])) // output => [2, 4, 6]