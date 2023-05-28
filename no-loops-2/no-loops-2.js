
// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// return directly using includes method a.includes(X)
function check(a,x){
return a.includes(x)
};

console.log(check([66, 101], 66)) //, true)
console.log(check(['t', 'e', 's', 't'], 'e')) // true))
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) //false