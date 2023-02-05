// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//directly return using filter method and the length of the argument equaling to 4
function friend(friends){
    return friends.filter(word => word.length === 4)
  }
  
  console.log(friend(["Ryan", "Kieran", "Mark", "4"])) // output => ["Ryan", "Mark"]