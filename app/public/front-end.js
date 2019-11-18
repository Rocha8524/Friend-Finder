// On click function
$("#submit").on("click", function () {

    // If all required fields are filled
    if (userSurveyForm() == true) {


        // Create variables for user data sent by survey questions
        var userInput = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
            ]
        }

        // Grab the URL of the website
        var currentURL = window.location.origin;
        // AJAX post the data to the friends route. 
        $.post(currentURL + "/api/friends", userInput, function (data) {
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $("#matchImage").attribute("src", data.photo);
            // Show the modal with the best match 
            $("#resultsModal").modal('toggle');
        });
    }
    else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
});