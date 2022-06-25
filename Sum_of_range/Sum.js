function abc(a, b, sum = 0) {
    if (b >= a) {
        sum = sum + b
        b = b - 1
        return   abc(a, b, sum)
    }
    return sum
} console.log(abc(1, 10))