// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// directly return and use replaceAll string Method 
function fireFight(s){
  return s.replaceAll('Fire', "~~")
}

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))