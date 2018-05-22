//Init the local storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();


//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI object
const ui = new UI();


//weather.changeLocation('Lisbon', 'PT');

//Create event listener for when the DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

//Event listener for modal
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country').value; 
    
    //change the location
    weather.changeLocation(city, countryCode);

    //Set location in LS
    storage.setLocationData(city, countryCode);

    //And get weather again
    getWeather();

    //close the modal
    $('#locModal').modal('hide');
});


//Fetch weather data
function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

