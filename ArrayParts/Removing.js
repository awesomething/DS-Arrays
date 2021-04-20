// removing values is similar to inserting, except there is copying of values
// backward to fill space where there was a removal of a value rather than
// forwards to make space for a new value


//...
    remove(index); {                        // ; is there to keep error from appearing
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
//...


// using same logic as for insertion, best case is O(1), same as popping
// avg and worst is O(n)