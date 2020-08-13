//call the express
var express = require("express");

//put in the variable
var app = express();

//call the get method and send the response
app.get("/", function (req, res) {
    res.send("Hello Express World");
});

//call the get method to the server
app.get("/bye", function (req, res) {
    res.send("bye bye express");
});

//listen the port and IP to send the request and get the response on to the browser
app.listen(3000, function () {
    console.log("Server Started");
});