// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


// declare total variable set to 0
// declare arr method and assign it the busStops parameter using the flat method to turn the nested array into one array, infinity will flatten the array no matter the depth of the nested arrays
// for loop
// if the index is even then add the element in the array to total
// else subtract the element in the array from total
// return total

function number(busStops){
    let total = 0
    let arr = busStops.flat(Infinity)
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            total += arr[i]
        } else {
            total -= arr[i]
        }
    }
    return total
  }

  // alternate solution
function number(busStops){
    let total = 0
    for(let i = 0; i < busStops.length; i++){
        total += busStops[i][0]
        total -= busStops[i][1]
    }
    return total
  }