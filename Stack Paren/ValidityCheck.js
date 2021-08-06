function sumArray(arr){
    return( arr.reduce((a, b) => a + b, 0) )
}

function checkString(s) {
    const symbols = {'openers':['(', '{', '['], closers:[')', '}', ']']};
    const count = { };
    let lastOpener = [];
    const addCount = (c) => { count[c] = (count[c]==undefined) ? 1 : (count[c]<1 ? 1 : count[c]+1 )};
    const removeCount = (c) => {return (count[c]==undefined) ? (count[c]=0, false ): (count[c]-=1, count[c]>=0) };
    for(char of s){
        if(symbols.openers.indexOf(char) >= 0 ){
            addCount(char);
            lastOpener.push(char);
        }
        if( symbols.closers.indexOf(char) >= 0  ){
            const opener = symbols.openers[ symbols.closers.indexOf(char) ]
            const status = ( lastOpener.pop() == opener) ? removeCount(opener) : false;
            if ( !status ){
                return false
            } 
        }
    }
    return (sumArray( Object.values(count) ) == 0); // Return false if any positive values leftover
}

const tests = [
    ``,
    `()`,
    `(())`,
    `(()))`,
    `)))))`,
    `()()()(`,
    `var test = { numbers:[1,2,3], nuts:["my", "mouth"] }`,
    `( { [ ( [] ) ] } )`,
    `( { [ ( [ ) ] } )`
]
const colors = {'green':"\x1b[32m", 'red':"\x1b[31m"}

for(test of tests){
    console.log( `Checking string nymber ${tests.indexOf(test)}: "${test}" `)
    const status = checkString(test) ;
    console.log( (!status ? colors.red:colors.green ), `Status: ${ ( status ? "Valid":"Invalid" ) } \n`, "\x1b[0m" )
}
