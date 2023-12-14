// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

// declare str variable assigned to an empty string
// for loop through
// check if formData == "<", add to str variable "&lt;"
// check if formData == ">", add to str variable "&gt;"
// check if formData == '"', add to str variable "&quot;"
// check if formData == "&", add to str variable "&amp;"
// else add the formData parameter to str

function htmlspecialchars(formData) {
    let str = ''
    
    for(let i = 0; i < formData.length; i++){
        if(formData[i] == '<'){
            str += '&lt;'
        }else if(formData[i] == '>'){
            str += '&gt;'
        } else if(formData[i] == '"'){
            str += '&quot;'
        } else if(formData[i] == '&'){
            str += '&amp;'
        } else {
            str += formData[i]
        }
    }
    return str
  }
  
  
  console.log(htmlspecialchars("<h2>Hello World</h2>"))
        //"&lt;h2&gt;Hello World&lt;/h2&gt;"
     
  console.log(htmlspecialchars("Hello, how would you & I fare?"))
  //      "Hello, how would you &amp; I fare?"
  
  console.log(htmlspecialchars('How was "The Matrix"?  Did you like it?'))
    //    'How was &quot;The Matrix&quot;?  Did you like it?