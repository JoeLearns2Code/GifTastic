//array for topics to be inlcuded as buttons

var fighterList = ["Ryu", "Ken Masters", "Vega", "Chun-Li", "Sub-Zero", "Johnny Cage", "Sonya Blade", "Sabrewulf", "Fulgore", "Sol Badguy", "Ky Kiske", "Millia Rage", "Street Fighter", "Mortal Kombat", "Killer Instinct", "Guilty Gear"];

// Main function to retrieve the data from GIPHY and display it on the page.

function displayFighter() {

    //variable for the search word entered and  queryURL

    var searchWord = $(this).attr("data-name");
    
    //query needs to be limited to 10 results
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=qIcY1vxKGji70LwiUeYTlEW7IYWpqvP9&limit=10";


    // AJAX call

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //variable for query results
    var results = response.data;
    console.log(results);
    //iterate the results 
    for (var i = 0; i < results.length; i++) {

        //add a div to hold the API data
    var fighterDiv = $("div class='fighterimg'>");

        //get the gif rating to be displayed
    var rating = results[i].rating;
        //get the animated gif image
    var animatedGif = results[i].images.fixed_height.url;
        //get the static gif image
    var staticGif = results[i].images.fixed_height_still.url;
    //div for rating
    var rateDisplay = $("<p>").text("Rating: " + rating);
    //div for image and loaded gif  - should be static version to start
    var image = $("<img>").attr("src", staticGif);
    //add class to image for later reference  
    image.addClass("fighterGIPHY");

    
    image.attr(staticGif);
    image.attr(animatedGif);
    fighterDiv.append(rateDisplay);
    fighterDiv.append(image);

    
    $("#fighterspace").prepend(fighterDiv);
        }

    });

};

// Activate the displayFighter function

$(document).on("click", ".fighter-button" , displayFighter);


//Function for displaying starting buttons

function addButtons() {

    $("#buttonspace").empty();


    //Loop through the array
    for (var i = 0; i < fighterList.length; i++) {

        //create a button for each string in the array
        var a = $("<button>");

        a.addClass("fighter-button");
        a.attr("data-name", fighterList[i]);
        a.text(fighterList[i]);
        $("#buttonspace").append(a);


    }
};


//  Add new buttons based on user input
$("#add-fighter").on("click", function (event) {
    event.preventDefault();
    //create variable for user input and push to the array
    var chosenFighter = $("#user-input").val().trim();
    fighterList.push(chosenFighter);

    addButtons();

});



//Event listener for buttons

$(document).on("click", ".fighter-button", displayFighter);
// Display the buttons
addButtons();
