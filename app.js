//Init Storage
const storage = new Storage();
//Get stored Location Data
const weatherLocation = storage.getLocationData()

//Init weather Object
const weather = new Weather(weatherLocation.city);

//init UI object
const ui = new UI;

//Get Weather after loading the DOM
document.addEventListener('DOMContentLoaded', getWeather);
document.addEventListener('DOMContentLoaded', getForecast);

//Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;

    //changeLocation function from weather.js
    weather.changeLocation(city);

    //change in LocalStorage
    storage.setLocationData(city);

    //Get and dsiplay weather
    getWeather();
    getForecast();

    //close modal
    $('#locModal').modal('hide')
})

//Function which fetches the data from weather.js
function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(e => console.log(e));
}

function getForecast(){
    weather.getForecast()
    .then(fore => {
        ui.paintf(fore)
    })
    .catch(e => console.log(e))

}
