class Weather{
    constructor(city){
        this.apiKey = "c98388dec89c4170b7e81503202910";
        this.city = city
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        
        const responseData = await response.json();

        return responseData;
    }

    //Fetch 1day forecast
    async getForecast(){
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=1`);

        const responseData = await response.json();

        return responseData.forecast.forecastday[0];
    }

    //Change location
    changeLocation(city){
        this.city = city
    }
}