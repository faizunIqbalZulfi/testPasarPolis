functions = (arr) => {
    let max
    let secondMax
    for (let i = 0; i < arr.length; i++) {
        if (!max || parseInt(max) == parseInt(arr[i]) || parseInt(arr[i]) > parseInt(max)) {
            max = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != max) {
            if (!secondMax) {
                secondMax = arr[i]
            } else if (parseInt(arr[i]) > parseInt(secondMax) && parseInt(arr[i]) < parseInt(max)) {
                secondMax = arr[i]
            }
        }
    }
    if (!secondMax) {
        return secondMax = -1
    }
    return secondMax
}

console.log(functions(["111", "22"]));
// ["3", "-2"]
// ["5", "5", "4", "2"]
// ["4", "4", "4", "4"]
// ['23', '34', '12', '43', '-23', '32', '23', '12']

