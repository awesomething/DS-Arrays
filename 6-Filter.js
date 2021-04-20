// Imagine you have an array of numbers. Write an algorithm to remove all numbers 
// less than 5 from the array. DO NOT use Array's built-in .filter() method here; 
// write the algorithm from scratch.


function filtering(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 5) {
            numbers = numbers.splice(numbers[i])
        }
    }
    return numbers
}


console.log(filtering([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))