// Linking routes to the friend "data" source.
var friends = require("../data/friends");

module.exports = function (app) {

    // API GET Request
    app.get("/api/friends", function (request, response) {
        res.json(friends);
    });

    // The post request handles when a user submits a form and data to the surver
    app.post("/api/friends", function (request, response) {
        console.log(request.body.scores);

        // Will handle the incoming survey results and compatibility logic
        var userInput = request.body;

        // Loops through all of the possible options
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // Default friend match and changes result to whoever has the minimum difference in scores
        var bestFriend = 0;
        var minimumDifference = 40;

        for (var i = 0; i < friends.length - 1; i++) {
            var totalDifference = 0;
            
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestFriend = i;
                minimumDifference = totalDifference;
            }
        }

        friends.push(userInput);

        response.json(friends[bestFriend]);
    });
};