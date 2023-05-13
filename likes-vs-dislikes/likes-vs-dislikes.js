// // Like, Dislike, Nothing come from Preloaded
// YouTube had a like and a dislike button, which allowed users to express their 
// opinions about particular content. It was set up in such a way that you cannot 
// like and dislike a video at the same time. There are two other interesting rules 
// to be noted about the interface: Pressing a button, which is already active, will 
// undo your press. If you press the like button after pressing the dislike button, 
// the like button overwrites the previous "Dislike" state. The same is true for the 
// other way round.

// for loop through
// check if buttons[i] === buttons[i + 1], if it does return nothing
// else return the last element in the array

function likeOrDislike(buttons) {
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i] == buttons[i + 1]){
            return 'Nothing'
        } else {
            return buttons[buttons.length - 1]
        }
    }
  }
  
  console.log(likeOrDislike(["Dislike"])) // output => "Dislike"
  console.log(likeOrDislike(["Like","Like"])) // output =>  "Nothing"
  console.log(likeOrDislike(["Dislike","Like"])) // output => "Like" 