

function SelectionSort(array){
    
    const arrLength = array.length-1
    var count = 0
    let smallest = array[1]
    let sortedArray = [smallest]
    for(let x=1; x<arrLength; x++ ){
        
        for(item of array ){ // let y=0; y<array.length; y++ ){
            count ++
            if(item<smallest){
                smallest = item
            }
        }
        sortedArray.push( smallest )
        array.splice( array.indexOf(smallest), 1)
    }
    console.log("op", count)
    return sortedArray
}

var myArray = [6,2,8,1,7,3,9,4,5]

console.log( SelectionSort (myArray) )

