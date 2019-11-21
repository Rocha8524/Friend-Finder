// Linking routes to the friend "data" source.
var friends = require("../data/friends.js");

module.exports = function (app) {
    
    // API GET Request
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });

     // The post request handles when a user submits a form and data to the surver
    app.post("/api/friends", function (request, response) {
        console.log(request.body.scores);

        // Will handle the incoming survey results and compatibility logic
        var userInput = request.body;
        var userResponse = userInput.scores;

         // Loops through all of the possible options
        var match = {
            name: "",
            photo: "",
            difference: 50
        };

        for (var i = 0; i < friends.length - 1; i++) {
            var totalDifference = 0;

            
            for (var j = 0; j < userResponse.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - userResponse[j]);

                if (totalDifference < match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;
                }
            }
        }

        friends.push(userInput);

        response.json(match);

    });
};