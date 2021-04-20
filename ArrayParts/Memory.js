class Memory {
    constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
    }

    allocate(size) {                                    // reserves a contiguous block of memory consisting of size
    if (this.head + size > this.memory.length) {        // boxes which you can safely modify, returning a pointer to the 
        return null;                                    // 1st box or null if the allocation fails
    }

    let start = this.head;

    this.head += size;
    return start;
    }

    free(ptr) {}                                        // frees the block of memory reserved using allocate
                                                        // 'ptr' is shorthand for  pointer: variables containing memory addresses
                                                        // are known as pointers

    copy(toIdx, fromIdx, size) {                        // copies size boxes of data from the 'from' pointer to the 'to' pointer
    if (fromIdx === toIdx) {                            // example: copy(10, 0, 3) would copy values at boxes 0, 1, and 2 to boxes
        return;                                         // at 10, 11, and 12 respectively
    }

    if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
        }
    } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
        }
    }
    }

    get(ptr) {                                          // returns value stored at a certain memory address
    return this.memory[ptr];
    }

    set(ptr, value) {                                   // sets the value stored at a certain memory address
    this.memory[ptr] = value;
    }
}
    
    module.exports = Memory;