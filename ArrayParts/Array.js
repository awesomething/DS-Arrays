import './Memory'
import Memory from './Memory'


class Array {
    constructor() {                                  
        this.length = 0                           
        this.ptr = memory.allocate(this.length)     // array starts with a length of 0 and a pointer to 0 blocks of memory
    }

    // push method resizes array, then increases the length and sets a single memory address(both O(1))
    // push is also O(n)

    push(value) {                                   // pushing a new element(value) to the end of the array by 
        this._resize(this.length + 1)               // increasing(resize) the amount of memory reserved so there is space for the new item
        memory.set(this.ptr + this.length, value)   // 'set' the final block with 'this.ptr +length' to contain the new 'value' --
        this.length++                               // values in the array are always stored in contiguous memory -- 
    }                                               // in order to get to the address of the nth item, you have to add n to the memory 
                                                    // address of the start of the data
    
    // Ideally, you would ask for extra space directly at the end of currently allocated space for resizing
    // this is not possible, because the space after what's been allocated for the array will have been already
    // allocated for some other purpose.
    // Instead, allocate a new, larger chunk of memory, copy existing values from old chunk to new chunk, free the old chunk

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)  // copy each item of data to a new box each time you resize array
        memory.free(oldPtr)                         // resize option has the worst, best, and average case of O(n)
    }
}


// ==========================
//          OR
// ==========================

// rather than resizing every time you push data, allocate more space than you need

class Array {
    constructor() {
        this.length = 0                                         // now there is length
        this._capacity = 0                                      // along with capacity
        this.ptr = memory.allocate(this.length)
    }

    push(value){                                                // if the length is greater than the capacity
        if(this.length >= this._capacity) {                     // then resize according to the 
            this._resize((this.length + 1) * Array.SIZE_RATIO)  // SIZE_RATIO (in this case is 3)
        }

        // basically each time you go over the capacity, you triple the size of memory which is allocated
        // best and avg case for pushing, you won't need to resize, making these O(1) operations
        // worst case, you need to resize, making it O(n)

        memory.set(this.ptr + this.length, value)
        this.length++
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if(this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    // tradeoff is wasting memory when capacity is greater than length
    // given that pushing to arrays is incredibly ocmmon then it's generally worthwhile
    // optimization to give O(1) performance

}
Array.SIZE_RATIO = 3




module.exports = Array