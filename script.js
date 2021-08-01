const weatherStatus = document.getElementById("weather-status");
const error = document.getElementById("error");
const city = document.getElementById("searched-city");
const button = document.getElementById("button");
const weather = document.getElementById("lead");
const weatherIcon = document.getElementById("weather-icon");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const api = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'a3b5f59cfcb6d1f5a3a88380cb2d8649';


button.addEventListener("click", () => {
    const searchedCity = city.value;
    getTemperature(searchedCity);

})

function getTemperature(searchedCity) {
    const url = `${api}?q=${searchedCity}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod == "404") {
                errorMessage();
            }
            else {
                displayTemperature(data);
            }
        });
}

function displayTemperature(element){
    weatherStatus.style.display = "block";
    error.style.display = "none";
    const iconURL = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
    weatherIcon.src = iconURL;
    cityName.innerText = element.name;
    temperature.innerText = Math.round(element.main.temp - 273);
    weather.innerText = element.weather[0].main;
    console.log(element);
}

function errorMessage(){
    weatherStatus.style.display = "none";
    error.style.display = "block";
}

getTemperature("dhaka");

fetch('https://api.unsplash.com/search/photos?query=office&client_id=oj9mWi6oAIts4F-TQAB8JHa5MqXbacXzYBr5XucEcZg')
    .then(res => res.json())
    .then(data => console.log(data));