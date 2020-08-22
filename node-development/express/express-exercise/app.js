var express = require("express");
var app = express();

app.get("/", function (request, response) {
    response.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (request, response) {
    var sounds = {
        pig: "Oink",
        cat: "I hate you human",
        cow: "moo",
        dog: "Woof Woof!",
        goldfish: ". . ."
    }
    var animal = request.params.animal.toLowerCase();
    var sound = sounds[animal];
    response.send("The " + animal + " says '" + sound + "'");
});

app.get("/speak/:message/:repeat", function (request, response) {
    var message = request.params.message;
    var repeat = request.params.repeat;
    var result = " ";
    for (var i = 0; i < repeat; i++) {
        result = result + " " + message;
    }
    response.send(result);
});

app.get("*", function (request, response) {
    response.send("Sorry, page not found...what are you with your life?");
});

app.listen(3000, "127.0.0.1", function () {
    console.log("server started!!!")
});