// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// check array if it contains the value, length?
// array can contain numbers or strings, x can be either
// return if the array contains the value
// return false if not

function check(a, x) {
    for(let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        return true 
      }
     }
     return false
  }
  
  console.log(check([66, 101]),66)
  console.log(check([101, 45, 75, 105, 99, 107]), 107)
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'))