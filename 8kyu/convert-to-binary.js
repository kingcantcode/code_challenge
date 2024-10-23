// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Solution
const toBinary = n => +n.toString(2);
console.log(toBinary(11)) // Ouptut 1011