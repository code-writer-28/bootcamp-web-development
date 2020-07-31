//print reverse
function printReverse(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index]);
    }
}

//is uniform
function isUniform(arr) {
    var first = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] !== first) {
            return "arr is not uniform";
        }
    }
    return "arr is uniform";
}

//sum of array
function sumOfArray(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    return sum;
}

//largest number in the array
function largestNumber(array) {
    var largest = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            largest = array[index];
        }
    }
    return largest;
}