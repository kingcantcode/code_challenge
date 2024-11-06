// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

// Solution
function isTriangle(a,b,c) {
    const sides = [a, b, c].sort((a, b) => a - b) // 1, 5, 10
    const shortestSide = sides.slice(0, 2).reduce((a, b) => a + b) // 1 + 5 = 6

    return (shortestSide > sides[2]) // 6 > 10 = false

}

console.log(isTriangle(10,5,1)) // Output: false