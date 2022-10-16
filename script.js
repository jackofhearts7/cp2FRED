/* PARK SEARCH STUFF */
fetch("parkcodes.json")
    .then(response => {
        return response.json();
    }).then(parksJson => {
        console.log(parksJson);

        document.getElementById("parkSearch").addEventListener("keyup", function(event) {
            event.preventDefault();
            var input, filter, ul, li, a, i, txtValue;
            let counter = 0;
            input = document.getElementById("parkSearch");
            filter = input.value.toUpperCase();
            searchResultsDisplay = document.getElementById("searchResults");
            runningResults = "";
            //ul = document.getElementById("myUL");
            //li = ul.getElementsByTagName("li");
            for (i = 0; i < parksJson.length; i++) {
                currentName = parksJson[i].park_name;
                currentCode = parksJson[i].park_code;
                if (currentName.toUpperCase().indexOf(filter) > -1) {
                    runningResults += '<div class="searchOption' + counter + '">';
                    runningResults += '<p class="optionName">' + currentName + '</p>';
                    runningResults += '<p class="optionCode">' + currentCode + '</p>';
                    runningResults += '<button class="searchButton" value="' + currentCode + '">Learn About This Park</button>';
                    runningResults += '</div>';
                    counter++
                } else {
                    continue;
                }
                if (counter >= 5) { break; }
            }
            document.getElementById("searchResults").innerHTML = runningResults;

            var searchButtons = document.getElementsByClassName("searchButton")
            for (var i = 0; i < searchButtons.length; i++) {
                function attempt() { passCodeToAPI(this); }
                searchButtons[i].addEventListener('click', attempt, false);
            }
        })
    })

var passCodeToAPI = function(button) {
    event.preventDefault();
    var code = button.getAttribute("value");
    console.log(code);
};






/* API CALLING STUFF */
/*
document.getElementById(parkSubmit).addEventListener("click", function(event) {
    event.preventDefault();
    const park = document.getElementById(parkInput).value;
    if (park === "") 
        return;
    console.log(park);

const parkURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + park + "&api_key=3Kb9nfh2Z2t6Ti6EbqG4MaqdbGdUE8Nwo0XMdn9m";
fetch(parkURL)
.then(function(response) {
    return response.json();
}).then(function(json) {
    let parkName = "";
    parkName +=  





})});


 */