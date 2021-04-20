// You are given an array containing positive and negative integers.
// Write an algorithm which will find the largest sum in continuous sequence.
//
// --- Input: [4, 6, -3, 5, -2, 1]
// --- Output: 12


function maxSum(numbers) {
    let result = 0
    for(let i = 0; i < numbers.length; i++) {
        result = result += numbers[i]
    }

    return result
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))