var express = require("express");
var app = express();

/**
 * Order of routes matters...
 */
app.get("/", function (request, response) {
    response.send("Hi There");
});

app.get("/bye", function (request, response) {
    response.send("Bye Bye . . .");
});

app.get("/dogs", function (request, response) {
    response.send("BHAU BHAU");
});

app.get("/r/:companyName", function (request, response) {
    console.log(request.params);
    response.send("Your Company's Name is " + request.params.companyName);
});

app.get("/r/:companyName/departments/:departmentName/heads/:headsName", function (request, response) {
    console.log(request.params);
    response.send("Your department's Head Name is " + request.params.headsName);
});

app.get("/*", function (request, response) {
    response.send("We don't have this Page");
});

app.listen(3000, "127.0.0.1", function () {
    console.log("Server Started!..")
});