document.getElementById("parkResults").addEventListener("click", function(event) {
    event.preventDefault();
    const parkCode = document.getElementById(parkInput).value;
    if (parkCode === "") 
        return;
    console.log(parkCode);

const parkURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=3Kb9nfh2Z2t6Ti6EbqG4MaqdbGdUE8Nwo0XMdn9m";
fetch(parkURL)
.then(function(parkResponse) {
    return parkResponse.json();
}).then(function(json) {
    let results = "";
    results +=  '<div class="container">' + '<div class="row">' + '<div class="col-md">' + json.fullName + "</h2>" + '</div>' + '</div>';
    results += '<div class="container">' + '</div>' + '<div class="container">' + '<div class="col-md">';
    for (let i = 0; i < json.activities.length; i++) {
        results += '<div class="row">' + json.activities[i].name + '</div>' + '</div>'; 
    }    
    document.getElementById("parkResults").innerHTML = results;
})});