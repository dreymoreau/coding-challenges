// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// check directly if n modulus x and n modulus equals 0 meaning a whole number, which would mean they are divisible by both elements provided, return true if so, return false if not

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  }
  return false;
}
