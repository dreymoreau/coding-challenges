// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

// declare multiplyNum variable assigning it to Math.abs passing in number parameter, then use toString method, split and length to get the length of how many numbers are in the parameter, Math.abs is needed here because when splitting the number it will have a extra place for the minus sign which will mess up the final calculation, Math.abs returns the absolute number
// return number multiplied by Math.pow method which creates a power of, passing in 5 as the first parameter and then multiplyNum as the second parameter which is the length of the number parameter

function multiply(number){
    let multiplyNum = Math.abs(number).toString().split('').length
    return number * Math.pow(5, multiplyNum)
  }
  console.log(multiply(10),250);
  console.log(multiply(5),25);
  console.log(multiply(200),25000);
  console.log(multiply(-2),-10);