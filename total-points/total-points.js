// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship

// declare sum variable
// loop through using a for loop
// compare index 0 to index 2, if x is greater add 3 points, if x = y add 1 point
// return sum variable

function points(games) {
    let sum = 0;
    for (let i =0; i < games.length; i++){
        if(games[i][0] > games[i][2]){
            sum += 3
        } else if (games[i][0]=== games[i][2]){
            sum += 1
        }
    }
    return sum
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))