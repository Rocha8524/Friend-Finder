// Modules used 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Bootstrapping express
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Basic route that sends the user first to the AJAX Page
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function (request, response) {
    response.sendFile(path.join(__dirname, "survey.html"))
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });