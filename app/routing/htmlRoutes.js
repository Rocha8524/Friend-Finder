// Include the path package to get the correct file path
var path = require("path");

module.exports = function(app) {

// Basic route that sends the user first to the AJAX Page
app.get("/app/public/survey.html", function(request, response) {
    response.sendFile(path.join(__dirname, "survey.html"))
});

  // If no matching route is found default to home
  app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
};