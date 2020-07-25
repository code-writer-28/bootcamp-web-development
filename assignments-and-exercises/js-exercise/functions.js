function isEven(num) {
    return num % 2 === 0;
}

function factorial(value) {
    var result = 1;
    for (let index = value; index > 1; index--) {
        result *= index;
    }
    return result;
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}