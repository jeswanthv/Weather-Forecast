class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feelslike');
        this.wind = document.getElementById('w-wind');
        this.fdesc = document.getElementById('wf-desc');
        this.fstring = document.getElementById('wf-string');
        this.fdetails = document.getElementById('wf-details');
        this.ficon = document.getElementById('wf-icon');
        this.fhumidity = document.getElementById('wf-humidity');
        this.ffeelslike = document.getElementById('wf-feelslike');
        this.frain = document.getElementById('wf-rain');
    }

    paint(weather){
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_c} C`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity} %`;
        this.feelslike.textContent = `Feels-Like: ${weather.current.feelslike_c} C`;
        this.wind.textContent = `Wind-Speed: ${weather.current.wind_kph} k/h`;
    }
    paintf(fweather){
        this.fdesc.textContent = fweather.day.condition.text;
        this.fstring.textContent = `${fweather.day.avgtemp_c} C`;
        this.ficon.setAttribute('src', fweather.day.condition.icon);
        this.fhumidity.textContent = `Relative Humidity: ${fweather.day.avghumidity} %`;
        this.frain.textContent = `Chance-of-rain: ${fweather.day.daily_chance_of_rain} %`;

    }
}