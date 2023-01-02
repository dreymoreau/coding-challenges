// Complete the solution so that it reverses the string passed into it.

//split str parameter into an array, reverse it then join it back

function solution(str){
    return str.split('').reverse().join('')
  }
  
  console.log(solution('world')) // output => 'dlrow'
  console.log(solution('hello')) // output => 'olleh'