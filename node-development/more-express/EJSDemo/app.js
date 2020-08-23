var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("home-page");
});

app.get("/fallinlovewith/:thing", function (request, response) {
    var thing = request.params.thing.toLowerCase();
    response.render("love-thing", {
        thingVar: thing
    });
});

app.get("/posts", function (request, response) {
    var posts = [{
            title: "Post 1",
            author: "satyam"
        },
        {
            title: "Post 2",
            author: "shivam"
        },
        {
            title: "Post 3",
            author: "sundaram"
        },
        {
            title: "Post 4",
            author: "prakash"
        }
    ];

    response.render("posts", {
        posts: posts
    });
});

app.listen(3000, "127.0.0.1", function () {
    console.log("server started!!..");
});