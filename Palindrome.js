/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

function ideas(){
    console.log(`
    - Starts and Ends with same char
    - Must be same forward as it is backwards
    - Lower/Uppercase are treated different; convert to one case
    - Time Complexity: O=n^2
    `)
}

function mirror(str){
    if(str.join("") == str.reverse().join("") ) {
        return str.join("")
    }
}
function longestPalindrome(str) {
    let matrix = {}, palindromes = [ str[0] ], iter = 0;
    str = str.toLowerCase().split("")
    str.forEach((char, index) => { (char in matrix) ? matrix[char].push(index) : matrix[char]=[index] } )
    for(root_char of str){
        while( matrix[root_char].length>1 ) {
            console.log("Iter:  ", iter); iter++ ;
            const focus = matrix[root_char].shift();
            //matrix[root_char].forEach( (num) => {
            for(let num of matrix[root_char].reverse() ) {
                const ret=mirror( str.slice(focus, num+1) );
                if(ret) {
                    palindromes.push( ret );
                    break;
                }
            } // )
        }
    }
    console.log("PALI: ", str, palindromes)
    return (palindromes.length<=0) ? "" : [...new Set(palindromes)].reduce( (previous, next) => { return previous.length > next.length ? previous : next; } );
}

// console.log("Are they equal? ", longestPalindrome("My dad is a racecar athlete") === "a racecar a" ? "Yes!":"No!");

const longAF = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

random_palindromes = [
    "sdth etdh ethth Amenicycinema dsth sedthgsedth",
    "dfgh esdth serthgft sety Draw Ward fsdg hs r dftgg ft ",
    " dfstghsdt Star rats drgserys",
    "drthyrsthStop pots jrdtujy ",
    "My dad is a racecar athlete",
    "abcda",
    //longAF
    //"a"
]

console.clear()
random_palindromes.forEach( phrase => console.log( `\nInput: "${phrase}" \nOutput: "${longestPalindrome(phrase) }" \n\n` )  )

/*

Input: "sdth etdh ethth Amenicycinema dsth sedthgsedth"
Output: " amenicycinema "

Input: "dfgh esdth serthgft sety Draw Ward fsdg hs r dftgg ft "
Output: " draw ward "

Input: " dfstghsdt Star rats drgserys"
Output: " star rats "

Input: "drthyrsthStop pots jrdtujy "
Output: "stop pots"

Input: "My dad is a racecar athlete"
Output: "a racecar a"
*/

console.log( 2+7 )
