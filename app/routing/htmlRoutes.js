// Include the path package to get the correct file path
var path = require("path");

module.exports = function (app) {

  // If no matching route is found default to home
  app.use("/", function (request, response) {
    response.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // Basic route that sends the user first to the AJAX Page
  app.get("/survey", function (request, response) {
    response.sendFile(path.join(__dirname, "/../public/survey.html"))
  });

};