var age = Number(prompt("What is your age?"));

if (age < 0) {
    console.log("Hey man, please come out from the womb");
} else if (age === 21) {
    console.log("Happiest 21st Birthday");
} else if (age % 2 !== 0) {
    console.log("Your age is odd!");
} else if (age % Math.sqrt(age) === 0) {
    console.log("Your age is perfect Square!")
}