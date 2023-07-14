// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


// declare only variable assigning it to the required letters in a string and use the split method
// declare num variable and assign it to 0
// for loop through 
// check if only doesnt include s[i], num++ 
// outside the for loop return num/s.length using template string

function printerError(s) {
    let only = 'abcdefghijklm'.split('')
    let num = 0
    for(let i = 0; i <s.length; i++){
        if(!only.includes(s[i])){
            num++
        }
    }
    return `${num}/${s.length}`
}