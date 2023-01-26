// GIVEN a weather dashboard with form inputs
var weatherapi = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=9caf1333480d692c12783172b60d65b1'
var cordapi = "http://api.openweathermap.org/geo/1.0/direct?q=california&limit=1&appid=9caf1333480d692c12783172b60d65b1"
console.log(cordapi)

var x;

var object;



// WHEN user searches for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
var searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', getWeather);

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
function getWeather (event){
    event.preventDefault();
    var location = document.querySelector(".search-input").value
console.log(location);
getUserRepo(location)
 
    // var search-input
}

var getUserRepo = function(location){
    var cordapi = "http://api.openweathermap.org/geo/1.0/direct?q="+ location +"&lon&limit=1&appid=9caf1333480d692c12783172b60d65b1"
    fetch(cordapi) .then(function (response) {
      if (response.ok) {
        console.log(response);
        console.log('hi'
        );
        response.json().then(function (data) {
          console.log(data);
          
         console.log("hi2")
         console.log(Object.value(x));
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
}

//var displayRepos = function (repos, searchTerm)

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that ci