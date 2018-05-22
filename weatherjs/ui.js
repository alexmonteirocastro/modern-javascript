class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.main = document.getElementById('w-main');
        this.description = document.getElementById('w-description');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.tempMax = document.getElementById('w-temp-max');
        this.tempMin = document.getElementById('w-temp-min');
        this.wind = document.getElementById('w-wind');
    }
    

    paint(weather){

        this.location.textContent = weather.name;
        this.main.textContent = weather.weather[0].main;
        this.description.textContent = weather.weather[0].description;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.tempMax.textContent = `Maximum Temperature (C): ${parseInt(weather.main.temp_max - 273)}`;
        this.tempMin.textContent = `Minimum Temperature (C): ${parseInt(weather.main.temp_min - 273)}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
        
    }
} 