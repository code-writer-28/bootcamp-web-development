var express = require("express");
var app = express();

var request = require('request');

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home-page");
});

app.get("/results", function (req, res) {
    var search = req.query.search;
    var url = "http://omdbapi.com/?s=" + search;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.render("results", {
                data: data
            });
        }
    });
});


app.listen(3000, "127.0.0.1", function () {
    console.log("server started!!!")
});