// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// declare sum variable
// loop through classPoints array and add it all to sum variable
// divide the sum variable by classPoints.length
// declare classAverage variable equals sum / classPoints.length
// check if my average is higher than the class average, if so return true
// return false
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for(let i = 0; i < classPoints.length; i++){
        sum += classPoints[i]
    }
    let classAverage = sum / classPoints.length
  
    if(classAverage < yourPoints){
        return true
    }
    return false
  }
  
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // output => true
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // output => false