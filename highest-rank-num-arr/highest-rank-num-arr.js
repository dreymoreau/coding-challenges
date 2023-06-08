// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples

// declare obj to an empty object
// for loop through
// use ternary to either count how many times the number occurs in the array or if it only occurs 
// once, set it to 1
// declare sorted variable assigning it to Object.entries method, to then sort the obj
// check if a[1] !== b[1], return b[1] - a[1] 
// else return b[0] - a[0] which will sort all the numbers that show up once but again in descending 
// order based off the first element in the array
// return sorted[0][0] to get the first array with the most occurrences, since it is sorted in descending
// order, then the first element inside of the array 
function highestRank(arr){
    let obj = {}
    
    for(let i = 0 ; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    }
    let sorted = Object.entries(obj).sort((a,b) => {
      if(a[1] !== b[1]){
        return b[1] - a[1]
      } else {
        return b[0]- a[0]
      }
         })
         console.log(sorted)
    return Number(sorted[0][0])
  
    }
  
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])) // 12