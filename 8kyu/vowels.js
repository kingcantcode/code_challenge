// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solution
function vowels(str) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    const characters = str.split("");

    for (let value of characters) {
        if (vowels.includes(value)) {
            count++;
        }
    }
    
    return count;
}

console.log(vowels("longday")); // Output: 2
