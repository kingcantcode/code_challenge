/*
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
Examples:
Input: [0]
Output: "even"
Input: [0, 1, 4]
Output: "odd"
Input: [0, -1, -5]
Output: "even"
*/

// Solution
const oddOrEven = arr => arr.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd"
console.log(oddOrEven([0, 1, 4, 1])) // Output: "even"