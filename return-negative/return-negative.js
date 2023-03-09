// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//if num is > 0 then return  -num -
// if num is < 0 return num

function makeNegative(num) {
    if(num > 0) {
        return -num
    }
    return num
   }
   console.log(makeNegative(42)) // output => -42
   console.log(makeNegative(-88)) // output => -88