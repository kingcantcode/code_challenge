// Create a function that takes two inputs: a string text and a string character. Your task is to replace all characters in the text with the character. If the text or the character is empty, the function should return an empty string.

// Solution
const contamination = (text, char) => text.replace(/./g, char)
console.log(contamination('abcsdfdfdsfdsfdsf', 'z')) // Output: zzz