// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// declare variable with array
// 

function min(list){
    
// expected output: 1

    return Math.min(...list);
}

console.log(min([2,3,1]));

function max(list) {
    
    // expected output: 1
    
        return Math.max(...list);
    }
    
    console.log(max([2,3,1]));
    