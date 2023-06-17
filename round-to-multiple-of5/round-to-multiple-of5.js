// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// directly return and use Math/ceil(n/5) *5
// using Math.ceil makes it always round up instead of down/up

function roundToNext5(n){
    return Math.ceil(n/5) *5
  }
  
  console.log(roundToNext5(3)) // 5
  console.log(roundToNext5(12)) // 15