// You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

// reassign text to use split method at ( which is in front of the phone number
// reassign the second element in the array to shifted variable
// declare str variable assigned to an empty string
// for loop through with the condition being 3, which will only get the first 3 numbers of the phone number
// use += to add elements in the shifted array to str
// outside of the for loop return str

function areaCode(text) {
  text = text.split("(");
  let shifted = text.pop();
  let str = "";

  for (let i = 0; i < 3; i++) {
    str += shifted[i];
  }
  return str;
}
console.log(areaCode("The supplier's phone number is (555) 867-5309")); //'555'
