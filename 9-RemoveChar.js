// Write an algorithm that deletes given characters from a string.
// For example, given a string of 'Battle of the Vowels: Hawaii vs. Grozny'
// and the characters to be removed are 'aeiou', the algorithm should 
// transform the original string to 'Bttl f th Vwls: Hw vs. Grzny'
// DON'T USE .filter / .split / .join

// --- Input: 'Battle of the Vowels: Hawaii vs. Grozny'
// --- Output: 'Bttl f th Vwls: Hw vs. Grzny'


function removeVowels(string, vowels){
    const remove = {}

    for(let i = 0; i < vowels.length; i++) {
        const char = remove[i]
        remove[char] = true
    }

    let result = ''
    for(let i = 0; i < string.length; i++) {
        const char = string[i]
        const lowerCase = char.toLowerCase()
        let shouldAdd = !(lowerCase in remove)
        if (shouldAdd) {
            result += char
        }
    }
    return result
}


console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))