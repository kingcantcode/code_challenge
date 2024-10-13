// Create a function that takes two parameters, integer and limit. The finction should return a list of multiples of integer up to limit, including limit if it is a multiple of integer.

// Example: If you input (2, 6), the output should be [2, 4, 6] because these are the multiples of 2 up to 6.

// Solution
function findMultiples(integer, limit) {
  const multiples = [];

  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}

console.log(findMultiples(2, 6)); // Output: [2, 4, 6]
