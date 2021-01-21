// STRING

var nama = "abcdefghi"

for (var i = 0; i < 3; i++) {
    temp = ""
    for (var j = 0; j < 3; j++) {
        temp += nama[3 * i + j]
    }
    console.log(temp)
}

//LOOPING
var n = "9"

for (var i = 0; i < n; i++) {
    temp = ''
    if (i < Math.ceil(n / 2)) {
        for (j = 0; j <= i; j++) {
            temp += '*'
        }
    } else {
        for (k = n; k > i; k--) {
            temp += '*'
        }
    }
    console.log(temp)
}

// coba cara laian strig

var nama = "abcdefghi"
index = 0
for (let i = 0; i < nama.length / 3; i++) {
    temp = ''
    for (let j = 0; j < 3; j++) {
        temp += nama[index]
        index++
    }
    console.log(temp);

}

//cara lain asterik
var n = 9
for (let i = 0; i < n; i++) {
    temp = ''
    if (i < Math.ceil(n / 2)) {
        for (var j = 0; j < Math.ceil(n / 2); j++) {
            if (j <= i) {
                temp += '*'
            } else {
                temp += ''
            }
        } console.log(temp)
    } else {
        for (var k = 0; k < Math.ceil(n / 2) - 1; k--) {
            if (n > i) {
                temp += '*'
                n--
            } else {
                temp += ''
            }
        } console.log(temp)
    }


}