// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Solution
function countPositivesSumNegatives(input) {
    if (!input || !input.length) {
        return []
    }

    const positive = input.filter(num => num > 0).length 
    const negative = input.filter(num => num < 0).reduce((a, b) => a + b, 0) 
    
    return [positive, negative]
}

console.log(countPositivesSumNegatives([])) // Output: []