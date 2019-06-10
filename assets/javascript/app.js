//array for topics to be inlcuded as buttons

var fighterList = ["Ryu", "Ken Masters", "Vega", "Chun-Li", "Sub-Zero", "Johnny Cage", "Sonya Blade,", "Sabrewulf", "Fulgore", "Sol Badguy", "Ky Kiske", "Millia Rage", "Street Fighter", "Mortal Kombat", "Killer Instinct", "Guilty Gear"];

// Main function to retrieve the data from GIPHY and display it on the page.

function displayFighter() {

//variable for the search word entered and  queryURL

var searchWord = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchWord + "api_key=qIcY1vxKGji70LwiUeYTlEW7IYWpqvP9";


// AJAX call

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    //console log the query URL and resulting object
    console.log(queryURL);
    console.log(response);





});

};



//Function for displaying buttons

function addButtons() {

$("#button-space").empty();

//Loop through the array
for (var i = 0; i < fighterList.length; i++) {

//create a button for each string in the array
var a = $("<button>");

a.addClass("fighter-button");
a.attr("data-name", fighterList[i]);
a.text(fighterList[i]);
$("#button-space").append(a + "should be here");
console.log("#button-space");
  }
}




//Event listener for buttons

$(document).on("click", ".fighter-button", displayFighter);
// Display the buttons
addButtons();