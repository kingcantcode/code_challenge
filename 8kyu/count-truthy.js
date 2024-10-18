// Write a function that counts how many "truthy" values are in a given array.

// Solution
const countTruthy = arr => arr.filter((a) => a).length
const arr = [0, null, undefined, '', 1, 2, 3]
console.log(countTruthy(arr)) // Output: 3