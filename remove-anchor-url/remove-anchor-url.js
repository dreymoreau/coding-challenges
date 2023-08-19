// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// reassign url to url.split('#')
// return url and use shift method to get the first element
function removeUrlAnchor(url) {
  url = url.split("#");
  return url.shift();
}
console.log(removeUrlAnchor("www.codewars.com#about")); // 'www.codewars.com'
