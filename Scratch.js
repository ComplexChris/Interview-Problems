

function count( str ) {
    const dict = {};
    let most =  -1, char='';
    for(let letter of str){
        // Iterate over every letter in str
        console.log(most)
        if(letter in dict){
            dict[letter] += 1;
        } else{
            dict[letter] = 1;
        }
        if( dict[letter]>most ){
            char = letter;
            most = dict[letter]
        }
        else if( dict[letter]==most ){
            char += letter;
        }
    }
    return char +"fghfgh"
}

console.log( "Letter: ", count("hedtghdllfgnoovv"))

// o(n) Auxillary
