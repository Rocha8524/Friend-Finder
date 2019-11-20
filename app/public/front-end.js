// On click function
$("#submit").on("click", function () {
    event.preventDefault();

    // Validate form
    var userSurveyForm = true;

    if ($("#name").val == "" || $("photo".val() == "")) {
        userSurveyForm = false;
    } if (
        $("#q1").val() === "empty" || $("#q2").val() === "empty" ||
        $("#q3").val() === "empty" || $("#q4").val() === "empty" ||
        $("#q5").val() === "empty" || $("#q6").val() === "empty" ||
        $("#q7").val() === "empty" || $("#q8").val() === "empty" ||
        $("#q9").val() === "empty" || $("#q10").val() === "empty") {
        valid = false;
    }

    // If all required fields are filled
    if (userSurveyForm === true) {

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
            $("#best-friend").text(data.name);
            $("#best-friend-photo").attribute("src", data.photo);
            // Show the modal with the best match 
            $("#results-modal").modal('toggle');
        });
    }
    else {
        alert("Survey is not 100% completed. Please fill out all the questions before submitting. Thank you!");
    }

    return false;
});