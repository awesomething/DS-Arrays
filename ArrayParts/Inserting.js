// inserting into any point of the array, not just the ends or middle
// all values need to shift after the new value back one position
// then put new value in its correct place


//...
    insert(index, value); {                         // ; is there to keep error from appearing
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }

        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }
//...

// best case, inserting value at back of array, same as pushing, meaning O(1)
// worst case, inserting at the start of the array, requiring values to be shifted
//      1 memory address later, that's n copies so O(n)
// avg case would be inserting value in  middle of array, shifting only half of values
//      along, meaning avg is also O(n) with n/2 copies