var button = document.querySelector("button");
var isBlack = false;


button.addEventListener("click", function () {
    if (isBlack) {
        document.querySelector("body").style.background = "whitesmoke";
        document.querySelector("h1").style.color = "black";
        isBlack = false;
    } else {
        document.querySelector("body").style.background = "black";
        document.querySelector("h1").style.color = "whitesmoke";
        isBlack = true;
    }
});