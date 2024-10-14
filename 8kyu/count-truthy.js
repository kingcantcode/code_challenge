const countTruthy = arr => arr.filter((a) => a).length

const arr = [0, null, undefined, '', 1, 2, 3]
console.log(countTruthy(arr))