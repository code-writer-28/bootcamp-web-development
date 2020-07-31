var secretNumber = 8;

var guess = Number(prompt("Guess a number?"));

if (guess === secretNumber) {
    alert("correctly guessed");
} else if (guess > secretNumber) {
    alert("Go Down");
} else {
    alert("Go Up");
}