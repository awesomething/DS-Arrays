// to pop a value from the end of an array
// rather than resize array, leave an extra space to be filled at next push


// ...
    pop(); {                                        // ; is there to keep error from appearing
        if(this.length === 0) {
            throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }
// ...

// O(1)