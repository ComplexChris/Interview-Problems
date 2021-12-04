function minimumDistance(area, curr_arr=0, curr_el=0, starting=true ) {
    // Write your code here
    // position = [current array, current element]
    let raw_dist = starting ? -1 : 1
    let found = false
    let new_val = 0

    if (starting){
        // console.log(area)
    }

    console.log( "\nCurrent: ", curr_arr, curr_el, raw_dist )
    if( curr_el+1 < area[ curr_arr ].length   ){
        const right = area[ curr_arr ] [ curr_el+1 ]
        if( right > 0){
            // Can travel to the right
            // raw_dist += 1

            raw_dist += minimumDistance( area, curr_arr, curr_el+1, false )
            if (right == 9) {
                found =true
                return raw_dist
            }
            else{
                return 1
            }


        }
    }

    if( curr_arr+1  < area.length ){
        let down = area[curr_arr+1] [curr_el]
        // console.log( down )
        if( down > 0){
            // console.log("DOWN")
            // Can travel to the down
            // raw_dist += 1

            raw_dist += minimumDistance( area, curr_arr+1, 0 , false  )
            if (down == 9) {
                found =true
                return raw_dist
            }
            else{
                return 1
            }

        }
    }

    console.log("RETURNING: ", raw_dist)
    return starting ? raw_dist : 1
}


function test (arr ){
    console.log( "\nAREA: ", arr )
    let raw_dist = 0
    // for( let curr_arr of arr ){
    arr.forEach( (curr_arr, index) => {
        // Outter loop to traverse down
        raw_dist += 1
        if (curr_arr[0] == 0) {
            for (let el of curr_arr){
                // Inner loop to traverse right
                raw_dist += 1
                curr_arr.shift()
                if( el == 9 ){
                    return raw_dist
                }
                else if ( el == 1 ){
                    test( arr.slice( index ) )
                }
            }
        }

    } )
    return raw_dist
}
var area =
[[1, 0, 0],
[1,0,0],
[1,9,1]
]    // 3 Steps

var area = [
    [ 1, 1, 1, 1 ],
    [ 0, 1, 1, 1 ],
    [ 0, 1, 0, 1 ],
    [ 1, 1, 9, 1 ],
    [ 0, 0, 1, 1 ]
  ]    // 5 Steps

// let dist = minimumDistance( area )

let dist = test(area)

console.log( "Distance: ", dist )
