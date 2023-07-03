//   Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".
  
  //if / else if conditions using the operator and then returning based on what the operator operation is
  function arithmetic(a, b, operator){
    if(operator === 'add'){
        return a + b
    } else if(operator === 'subtract'){
        return a - b
    } else if(operator === 'multiply'){
        return a * b
    } else {
        return a / b
    }
}
 
 // other solution using ternary 
 function arithmetic(a,b,operator){
     return operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : a / b
 }
 
console.log(arithmetic(1, 2, "add")) //3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"))// 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply")) //10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide")) //4,