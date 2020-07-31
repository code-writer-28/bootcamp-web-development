console.log("printing all the number from -10 to 19")
for (let index = -10; index <= 19; index++) {
    console.log(index);
}

console.log("printing all the even numbers from 10 to 40")
for (let index = 10; index <= 40; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

console.log("printing all the odd numbers from 300 to 333")
for (let index = 300; index <= 333; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

console.log("printing all the number between 5 and 50 which are divisible by 5 and 50")
for (let index = 5; index <= 50; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(index);
    }
}