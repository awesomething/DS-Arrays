// RETRIEVING VALUES

// ...
    get(index); {                                   // ; is there to keep error from appearing
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index)
    }
// ...


// this adds an index offset, gets values stored at a memory address
// both O(1) operations, retrieving values from any point in an array
// also has best, worst, and avg case performance of O(1) 