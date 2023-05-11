// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must 
// return the display text as shown in the examples:

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// if array is empty, return no one likes this
// for loop through
// if one name, template string return likes this
// two names template string, like this
// three names, commas in between like this
// four plus names, have first name, comma second name and number of people others like this, using names.length - 2

function likes(names) {
    if(names.length === 0){
        return 'no one likes this'
    }
    for(let i = 0; i < names.length; i++){
        if(names.length === 1){
            return `${names[0]} likes this`
        } else if(names.length === 2){
            return `${names[0]} and ${names[1]} like this`
        } else if (names.length === 3){
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else {
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
        }
    }
   }
   
   console.log(likes([]))  // output => 'no one likes this'
   console.log(likes(['Peter']))  // output => 'Peter likes this'
   console.log(likes(['Jacob', 'Alex']))  // output => 'Jacob and Alex like this'
   console.log(likes(['Max', 'John', 'Mark']))  // output => 'Max, John and Mark like this'
   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))  // output => 'Alex, Jacob and 2 others like this'