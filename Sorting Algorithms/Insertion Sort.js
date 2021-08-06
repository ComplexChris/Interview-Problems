
function InsertionSort(array){
    counter = 0
    for(let i=1; i<array.length; i++){
        const val = array[i]
        //console.log("i" , i)
        for(let j=0; j<i; j++){
            //console.log("j", j)
            counter ++
            if(array[i-1]<val){
                break
            }
            if(val<array[j]){
                array.splice(i, 1)    // Remove 
                array.splice(j, 0, val)    // Insert
                break
            }
        }
    }
    console.log("Operations: ", counter)
    return array
}

const sortFunc = (a,b) => {return a-b}

var myArray = [6,2,8,1,7,3,9,4,5]  // 26 operations
//var myArray = [15,20,88,77,23,15,20,29,56,150,3,88]    // 49 operations

console.log("JS's sort: ", myArray.sort(sortFunc) ) 
console.log(myArray)
console.log("My sort: ", InsertionSort (myArray) )

