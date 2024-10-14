// Write a function named howManySmaller that accepts two parameters:

// arr: an array of decimal numbers.
// n: a decimal number.

// The function should:
// Format all elements in arr to have two decimal places.
// Count and return the number of elements in arr that are smaller than n

// Solution
const howManySmaller = (arr, n) => arr.filter((x) => x.toFixed(2) < n).length;
console.log(howManySmaller([3.14159, 2.718, 1.618, 4.6692], 3.24));
