// Write a function that calculates the original product price, without VAT.
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

// Solution
const excludingVatPrice = price => !price ? -1 : Number((price * (100/115)).toFixed(2))
console.log(excludingVatPrice(123)) // Output: 106.96
