function boundedRatio(a, l, r){
    return a.map( (el, ind) => {
        const val = ~~(el/(ind+1))
        return (l<=val && val<=r && (val*(ind+1)==el)) ? true:false
    } )
}
// Number.isInteger( 2.5 )
const a = [8,5,6,16,5]
const l = 1
const r = 3

// console.log( boundedRatio( a, l, r ) )




function maxKOccurrencesOld(sequence, words){
    return words.map(currentWord => {
        let total = 0
        console.log("Current: ", currentWord)

        // while(true){
        //     const newWord = currentWord.repeat(total+1)
        //     console.log( "Iter: ", total, newWord )
        //     if( sequence.indexOf( newWord ) && total<10){
        //         total++
        //     }
        //     else{
        //         return total
        //     }
        // }

        while( sequence.includes( currentWord.repeat( total+1 ) ) ){
            console.log( "Iter: ", total,  currentWord.repeat( total+1 ) )
            total++
        }
        return total
    });
}

function maxKOccurrences(sequence, words){
    return words.map(currentWord => {
        let total = 0
        while( sequence.includes( currentWord.repeat( total+1 ) ) ){
            total++
        }
        return total
    });
}

const sequence = "abababcbabc"
const words = ["ab", "babc", "bca", "a"]

console.log("Occurences: ", maxKOccurrences(sequence, words) )
