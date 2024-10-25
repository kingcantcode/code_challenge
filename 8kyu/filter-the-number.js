// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// Solution
const filterString = value =>  Number(value.replace(/\D/g, ""))
console.log(filterString("aa1bb2cc3dd")) // Output: 123