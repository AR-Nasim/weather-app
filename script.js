const bgImg = document.getElementById("bg");
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
const imgApi = 'https://api.unsplash.com/search/photos';
const imgApiKey = 'oj9mWi6oAIts4F-TQAB8JHa5MqXbacXzYBr5XucEcZg';


button.addEventListener("click", () => {
    const searchedCity = city.value;
    getBackgroundImg(searchedCity);
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

function getBackgroundImg(searchedCity){
    const imgURL = `${imgApi}?query=${searchedCity}&client_id=${imgApiKey}`;
    fetch(imgURL)
    .then(res => res.json())
    .then(data => {
        bgImg.src = data.results[1].urls.full;
    });
}

function displayTemperature(element){
    weatherStatus.style.display = "block";
    error.style.display = "none";
    const iconURL = `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
    weatherIcon.src = iconURL;
    cityName.innerText = element.name;
    temperature.innerText = Math.round(element.main.temp - 273);
    weather.innerText = element.weather[0].main;
}

function errorMessage(){
    weatherStatus.style.display = "none";
    error.style.display = "block";
}
getBackgroundImg("dhaka");
getTemperature("dhaka");


