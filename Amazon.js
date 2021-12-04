
/*
 * Complete the 'combineParts' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY parts as parameter.
 */

function merge(a, b){
    return a+b
}

function sort( arr ) {
    return arr.sort( (a,b) => a-b )
}

function combineParts(parts) {
    // Write your code here
    if(parts.length < 2){
        return 0
    }
    let new_parts = sort(parts )
    let history = [ new_parts[0]+new_parts[1] ]    // Start with 10
    let total = history.slice(-1)[0]
    for ( let part of new_parts.slice(2)  ){
        console.log( part )
        let last = history.slice(-1)[0]
        const new_val = last + part
        history.push( new_val )
        total += new_val
    }

    return total;
}

var l = [8,4,6,12]
// console.log( l.slice(-1) )

// l.sort( (a,b) => a-b )
console.log(l)

let t = combineParts( l )


console.log( t )


