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