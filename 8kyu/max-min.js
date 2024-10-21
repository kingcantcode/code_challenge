// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Question
var min = function(list){
    return list[0];
}

var max = function(list){
    return list[0];
}

// Solution
const min = list => Math.min(...list);
const max = list => Math.max(...list);

console.log(max([-52, 56, 30, 29, -54, 0, -110]))