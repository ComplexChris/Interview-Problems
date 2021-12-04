/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */
var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function convert(numerals){
    let cache = [" "]
    const total = numerals.split("").map( (char, index ) => {
        cache = ( (cache[ cache.length-1 ] == char) ? [...cache, char] : [char])
        return( (cache.length>=4) ? (cache=[], null) : ( DIGIT_VALUES[char] < DIGIT_VALUES[numerals[index+1]] ) ? -DIGIT_VALUES[char]:DIGIT_VALUES[char] )
    } )
    return (total.indexOf(null)>=0 || total.indexOf(undefined)>=0) ? -1 : total.reduce( (grow, current) => grow+current )
}

const tests = [
    ['VI', 6, `Hint: When a smaller symbol is after a greater symbol, it's added.`],
    ['XX', 20, `Hint: If a symbol comes after itself, it's added.`],
    ['CM', 900, `Hint: When a smaller symbol appears before a greater symbol, it is subtracted.`],
    ['VI', 6, `Hint: The same symbol cannot be used more than three times in a row.`],
    ['XXX', 30, `Hint: The same symbol cannot be used more than three times in a row.`],
    ['This should not work', -1, `Hint: Function should only accept Roman Numerals.`],
    ['Danny is a nerd', -1, `Hint: Function should only accept Roman Numerals.`],
    ['MCMLXXXIX', 1989, `Hint: Function should only accept Roman Numerals.`],
]


const format_msg = (a,b) => `Expected ${a} to equal ${b}.`

const results = tests.map( trial => assert( trial ) )

function assert( obj ){
    if( convert(obj[0])!==obj[1] ) {
        console.log(`FAILED: ${obj[2]} \n`, `${format_msg(obj[0], obj[1])} \n${obj[2]}`)
        throw new Error( `${format_msg(obj[0], obj[1])} \n${obj[2]}` )
    }
    else(
        console.log(`PASSED: ${obj[2]}`)
    )
}

console.log("RESULTS: ", results)
