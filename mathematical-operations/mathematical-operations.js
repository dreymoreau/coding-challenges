// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// if operation == "+" then add value1 and value2
// else if operation == "-" then subtract value1 from value2
// else if operation == "*" then multiply value1 and value2
// else divide value1 by value2
function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}
