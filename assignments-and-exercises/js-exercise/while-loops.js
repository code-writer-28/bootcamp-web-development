console.log("printing all the number from -10 to 19")
var value = -10;
while (value <= 19) {
    console.log(value);
    value++;
}

console.log("printing all the even numbers from 10 to 40")
var value = 10;
while (value <= 40) {
    if (value % 2 === 0) {
        console.log(value);
    }
    value++;
}

console.log("printing all the odd numbers from 300 to 333")
var value = 300;
while (value <= 333) {
    if (value % 2 !== 0) {
        console.log(value);
    }
    value++;
}

console.log("printing all the number between 5 and 50 which are divisible by 5 and 50")
var value = 5;
while (value <= 50) {
    if (value % 3 === 0 && value % 5 === 0) {
        console.log(value);
    }
    value++;
}