functions = (arr) => {
    let max
    let secondMax
    for (let i = 0; i < arr.length; i++) {
        if (!max || max == arr[i] || arr[i] > max) {
            max = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != max) {
            if (!secondMax) {
                secondMax = arr[i]
            } else if (arr[i] > secondMax && arr[i] < max) {
                secondMax = arr[i]
            }
        }
    }
    if (!secondMax) {
        return secondMax = -1
    }
    return secondMax
}

console.log(functions([]));
// ["3", "-2"]
// ["5", "5", "4", "2"]
// ["4", "4", "4", "4"]
// ['23', '34', '12', '43', '-23', '32', '23', '12']