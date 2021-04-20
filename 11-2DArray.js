// Write an algorithm which searches through a 2D array, and whenever 
// it finds a 0 should set the entire row and column to 0.

// --- Input: 
//            [[1,0,1,1,0],
//            [0,1,1,1,0],
//            [1,1,1,1,1],
//            [1,0,1,1,1],
//            [1,1,1,1,1]];

// --- Output: 
//            [[0,0,0,0,0],
//            [0,0,0,0,0],
//            [0,0,1,1,0],
//            [0,0,0,0,0],
//            [0,0,1,1,0]];



function changeRows(array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++)
            if(array[i][j] === 0) {
                
            }
    }
}

let array = [[1,0,1,1,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [1,0,1,1,1],
            [1,1,1,1,1]];

console.log(changeRows(array))
