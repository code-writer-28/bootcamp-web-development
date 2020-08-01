var numSquares = 6;
var colors = [];
var pickedColor;
var colorsDisplay = document.getElementById("colorsDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetBtn = document.querySelector("#resetBtn");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons
    modeButtons();

    //set up squares
    setUpSquares();

    //reset all 
    reset();
}

function modeButtons() {
    for (let index = 0; index < modeBtn.length; index++) {
        modeBtn[index].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (let index = 0; index < squares.length; index++) {
        //add click listeners to the square
        squares[index].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "CoRrEcT!";
                resetBtn.textContent = "play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TrY aGaIn!"
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColor(numSquares);
    //pick a new random color from arrays
    pickedColor = pickColor();
    //chnage colorDisplay to match picked Color
    colorsDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    //emptied the messsgae display
    messageDisplay.textContent = "";
    //chang color of squares
    for (let index = 0; index < squares.length; index++) {
        if (colors[index]) {
            //initial colors to the squares
            squares[index].style.display = "block";
            squares[index].style.backgroundColor = colors[index];
        } else {
            //initial colors to the squares
            squares[index].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColor(num) {
    //make an aary
    var arr = [];
    //repeat num items
    for (let index = 0; index < num; index++) {
        //get random color and push it into arr
        arr.push(randomColor());
    }
    //retutn that arr
    return arr;
}

function randomColor() {
    //pick red color from 0-255
    var red = Math.floor(Math.random() * 256);
    //pick red color from 0-255
    var green = Math.floor(Math.random() * 256);
    //pick red color from 0-255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}