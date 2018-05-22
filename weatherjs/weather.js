class Weather{
    constructor(city, countryCode){
        this.apiKey = '7faa3350767fc7d2ec4753036a25c2f5';
        this.city = city;
        this.country = countryCode;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change Weather location
    changeLocation(city, countryCode){
        this.city = city;
        this.country = countryCode;
    }
}