function reverse( arr ){
    const len = arr.length
    return ( len<=0 ? [] : arr.slice(-1).concat( reverse( arr.slice(0, -1) ) ) )
}


if(true){
    test_arrays = [
        [],
        [1],
        ["One", "Two"],
        [1,2,3,4,5,6],
        "abcdefghijk".split("")
    ]
    test_arrays.forEach((element, i) => {
        console.log( `Test number ${i}: ${reverse(element)} `)
    });
}
