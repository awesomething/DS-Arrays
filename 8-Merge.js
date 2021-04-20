// Imagine you have two arrays which have already been sorted.
// Write an algorithm to merge the 2 arrays into a single array
// which should also be sorted.
//
// --- Input: [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// --- Output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]


function mergeArrays(one, two){
    let three = [...one, ...two]
    return three.sort((a, b) => a-b)
}

let one = [1, 3, 6, 8, 11]
let two = [2, 3, 5, 8, 9, 10]
console.log(mergeArrays(one, two))