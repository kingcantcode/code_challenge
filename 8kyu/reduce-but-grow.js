// Given a non-empty array of integers, return the result of multiplying the values together in order.

// Solution
const grow = x => x.reduce((a, b) => a * b)
console.log(grow([1, 2, 3])) // Output: 6