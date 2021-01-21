var x = ['ab', 'ba', 'aa', 'ab']
var y = []

console.log(x.length)
console.log('oooo')

for (let i = 0; i < x.length; i++) {
    if (i == 0) {
        y.push(x[i])
    } else {
        var s = true
        for (let j = 0; j < y.length; j++) {
            if (x[i] == y[j]) {
                s = false
            }
        }
        if (s == true) {
            y.push(x[i])
        }
    }
}
console.log(y)