// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

// declare total variable assigning it to an empty array
// for loop
// push elements array1[i] , array2[i] to total array
// return total

function arrayMash (array1, array2) {
    let total = []
    for(let i = 0; i < array1.length; i++){
        total.push(array1[i],array2[i])
    }
    return total
  }
  console.log(arrayMash([1, 2, 3], ['a', 'b', 'c'])) // [1, 'a', 2, 'b', 3, 'c']