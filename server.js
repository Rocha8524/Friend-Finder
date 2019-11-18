// Modules used 
var express = require("express");
var path = require("path");

//Bootstrapping express
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware (encode and decode data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/app/public/home.html", function (request, response) {
    response.sendFile(path.join(__dirname, "home.html"))
});

app.get("/app/public/survey.html", function (request, response) {
    response.sendFile(path.join(__dirname, "survey.html"))
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});