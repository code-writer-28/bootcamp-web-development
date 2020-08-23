var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

var friends = ["himanshu", "rupali", "choti", "chaptu"];

app.get("/", function (request, response) {
    response.render("home-page");
});

app.post("/addFriends", function (request, response) {
    var newFriend = request.body.newFriend;
    friends.push(newFriend);
    response.redirect("/friends");
});

app.get("/friends", function (request, response) {
    response.render("friends", {
        friends: friends
    });
});

app.listen(3000, "127.0.0.1", function () {
    console.log("Server is listening!..");
});