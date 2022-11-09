var whateverArrName = ["item0", "item1", "item2"]

whateverArrName[2]

var searchBox = document.querySelector('#searchBox');

var weatherButton = document.querySelector('#weatherButton');

var cityName = document.querySelector('.city');

var tempCity = document.querySelector('.temperature');

var windCity = document.querySelector('.wind');

var humidCity = document.querySelector('.humidity');

var rainCity = document.querySelector('.rainfall');

weatherButton.addEventListener('click', function(){
    console.log("weatherButton")
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchBox.value}&units=imperial&appid=961c08e4a008934a3cf03bcaca4ac1f3`)
    .then(function(response) {
    console.log(response)
    if (!response.ok){
        throw response.json()
     } 
    return response.json();
    }).then(function(weatherInfo){
    console.log(weatherInfo)
    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].main)
    // this list.[0] is referring to the first index of the list array in the console log that shows the temperature and other weather info.
    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].wind.speed)

    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].main.humidity)

    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].main)

    cityName.innerHTML=weatherInfo.city.name 

    tempCity.innerHTML= "Temp: " + weatherInfo.list[0].main.temp + " F"

    windCity.innerHTML= "Wind: " + weatherInfo.list[0].wind.speed + " mph"

    humidCity.innerHTML= "Humidity: " + weatherInfo.list[0].main.humidity + " mph"
    })
    })





var bermuda = {
    name: "leroy",
    food: "turkey",
    carabou: true
}
console.log(bermuda.food)