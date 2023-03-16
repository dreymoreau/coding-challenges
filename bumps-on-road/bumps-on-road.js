// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// declare count variable
// for loop through
// if x[i] === 'n' count++
// return using ternary operator if count is greater than 15 ? 'Car Dead' : 'Woohoo!'
function bump(x){
    let count = 0;
    for(let i = 0; i < x.length; i++){
        if(x[i] == 'n') {
            count++
        }
    }
    return count > 15 ? 'Car Dead' : 'Woohoo!'
}

// ** refactored way**
bump = x => x.split('n').length > 15 ? 'Car Dead' : 'Woohoo'

console.log(bump("__nn_nnnn__n_n___n____nn__nnn")) // => 'Woohoo!'
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")) // => 'Car Dead'