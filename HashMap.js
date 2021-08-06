const hash = (string, max) => {
    console.log("HASH: ", string, max)
    let result = 0;
    for (let char of string) {
        result += result ^ char.charCodeAt();
    }
    return result % max;
};

class HashMapOld{
    constructor(max_size){
        this.capacity = max_size || 8;
        this.storage = new Array(this.capacity)
    }

    set(key, value){
        // Adds item to storage
        const index = hash(key, this.capacity);
        console.log("INDEX: ", index)
        if( !this.get(index) ){
            // If index not in storage, add it.
            this.storage[index] = value;
        }
        else{
            console.log("ELSE : ", key, value)
            // Item at index, create object at key instead
            const size = this.capacity/2
            const temp = new HashMap( size )
            const old = this.get(index)

            temp.set( hash(old, size), old  )
            temp.set()

        }
    }

    get(key){
        // Retrieves item from storage
        // return (key) ? this.storage[key] : this.storage;
        if(!key){
            const val = this.storage[key];
            console.log("VAL: ", typeof val)
            return (typeof val !== 'object') ? val : ""
            //(val.constructor) ? "" : "" ;
        }
        else{
            return this.storage
        }
    }

    remove(key){
        // Removes item from storage
        delete this.storage[key];
    }
}

class HashMap{
    constructor(max_size){
        this.capacity = max_size || 8;
        this.storage = new Array(this.capacity)
    }

    set(key, value){
        // Adds item to storage
        const index = hash(key, this.capacity);
        console.log("INDEX: ", index)
        if( true /*!this.get(index)*/ ){
            // If index not in storage, add it.
            this.storage[index] = value;
        }
        else{
            // Item at index, create object at key instead
            console.log("ELSE : ", key, value)

        }
    }

    get(key){
        // Retrieves item from storage
        return (key) ? this.storage[key] : this.storage;
    }

    remove(key){
        // Removes item from storage
        delete this.storage[key];
    }
}

const test = new HashMapOld();
console.log(test.constructor.name)

test.set("var", "ASSHOLE")
test.set("var", "ASSHOLE2")
test.set("var", "ASSHOLE3")

console.log( test.get() )
