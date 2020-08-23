var express = require("express");
var app = express();

var request = require('request');

app.get("/results", function (req, res) {
    request("http://omdbapi.com/?s=california", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});


app.listen(3000, "127.0.0.1", function () {
    console.log("server started!!!")
});