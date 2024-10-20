// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Solution
const countSheeps = sheep => sheep.filter((s) => s).length
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined])) // Output: 2