// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// Solutipn
const position = letter => `Postion of alphabet: ${letter.charCodeAt(0) - 96}`
console.log((position("a"))) // Output: 1


