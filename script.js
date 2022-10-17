/* PARK SEARCH STUFF *///
fetch("parkcodesfull.json")
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
                    runningResults += '<div class="searchOption">';
                    runningResults += '<p class="optionName">' + currentName + '</p>';
                    runningResults += '<p class="optionCode">' + currentCode + '</p>';
                    runningResults += '<button class="searchButton" value="' + currentCode + '">Learn About This Park</button>';
                    runningResults += '</div>';
                    counter++
                } else {``
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
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("parkSearch").value = "";
    getParkInfoFromAPI(code);
};


/* API CALLING STUFF */
function getParkInfoFromAPI(parkCode) {
    if (parkCode === "") 
        return;
    console.log(parkCode);

const parkURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=3Kb9nfh2Z2t6Ti6EbqG4MaqdbGdUE8Nwo0XMdn9m";
fetch(parkURL)
.then(function(parkResponse) {
    return parkResponse.json();
}).then(function(json) {
    console.log(json);
    let results = "";
    results +=  '<div class="activityResults">';
    results += '<p class="optionName">' + json.data[0].fullName + '</p>';
    for (let i = 0; i < json.data[0].activities.length; i++) {
        results += '<p class="activityName">' + json.data[0].activities[i].name + '<br>' +  '</p>';
    }    
    results += '</div>';
    document.getElementById("parkResults").innerHTML = results;
})};
