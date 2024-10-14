// Write a function called showNumbers that takes one parameter, limit. This function should display all the numbers from 0 up to the specified limit. Additionally, next to each number, indicate whether it is even or odd.

// Solution
const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
  }
};

showNumbers(10);

// Output:
// 0 Even
// 1 Odd
// 2 Even
// 3 Odd
// 4 Even
// 5 Odd
// 6 Even
// 7 Odd
// 8 Even
// 9 Odd
// 10 Even
