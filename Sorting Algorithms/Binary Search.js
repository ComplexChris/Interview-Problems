

function Binary_Search(array, searchFor){
    // Assumes array is already numerically sorted
    console.log("Searching for: ", searchFor)
    const half = Math.ceil( array.length/2 )
    const [portion, index] = ( array[half] > searchFor ) ? [array.slice(0,half), 0] : [array.slice(half, array.length), half];
    if(array[index]!==searchFor && portion.length>1){
        const val = Binary_Search(portion, searchFor)
        return (val>=0) ?  index + val : -1
    }
    else{
        return (array[index] === searchFor) ? index : -1
    }
}



var myArray = [ 1, 3, 4, 5, 7, 8, 15, 20, 31, 32, 33, 40, 80, 99 ]

myArray.forEach( (el)=> {
    console.log(`Item: "${el}" \t Index: "${Binary_Search(myArray, el)}".`)
})
