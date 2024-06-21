// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

//declare arr variable and assign to an empty array
// for loop through
// check if s1[i] != s2[i], which would compare each index of each string, if they dont equal then push i, the index to arr
// return arr outside of the for loop

function spot(s1,s2){
    let arr = []
    for(let i = 0; i < s1.length; i++){
        if(s1[i] != s2[i]){
          arr.push(i)
      }
    }
    return arr
  }
  
  console.log(spot("abcdefg", "abcqetg")) // [3,5]
