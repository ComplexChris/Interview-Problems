// RotateArray arr, posint
// How many it'll shift to left
// 0 , or negative int
// Auxillary, space comp = n2

function Rotate(arr, shift_int){
    // Primary function to shift and wrap elements in an array
    // o(n) -> Linear Space/Time complexity
    const new_arr = []
    arr.forEach( (item, index)=>{
        let new_index = (index-shift_int) % arr.length;
        if(new_index<0) new_index+=arr.length
        new_arr[ new_index ] = item
    } )
    return new_arr;
}

function RotateClean(arr, shift_int){
    // Primary function to shift and wrap elements in an array
    // o(n) -> Linear Space/Time complexity
    // const new_arr = []
    return arr.map( (item, index)=>{
        let new_index = (index-shift_int) % arr.length;
        if(new_index<0) new_index+=arr.length
        new_arr[ new_index ] = item
    } )
    // return new_arr;
}

function Rotateold(arr, shift_int){
    for(let old_index=0; old_index<(arr.length/2); old_index++){
    // arr.forEach( (item, old_index)=>{
        console.log("Arr: ", old_index, arr)
        let new_index = (old_index-shift_int) % arr.length;
        if(new_index<0) new_index+=arr.length;
        let temp_char = arr[ new_index ];
        arr[ new_index ] = arr[old_index];
        arr[ old_index ] = temp_char;
        console.log("Arr: ", old_index, arr)
    } // )
    return arr
}

test_cases = [
    [],
    ['a'],
    ['a', 'b', 'c']
]

test_cases.forEach((test)=>{
    console.log(`\n\nOld: ${test} \nNew: ${Rotate(test, -100 )}`)
})
