function countTruthy(arr) {
    let count = 0
    for (let value of arr) {
        if (value) {
            count ++
        }
    return count
    }
}

const arr = [0, null, undefined, '', 1, 2, 3]
console.log(countTruthy(arr))