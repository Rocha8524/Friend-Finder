// Modules used 
var express = require("express");
var path = require("path");

//Bootstrapping express
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware (encode and decode data)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(request, response) {
    response.sendFile(path.join())
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });