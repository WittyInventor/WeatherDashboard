var whateverArrName = ["item0", "item1", "item2"]

whateverArrName[2]

var searchBox = document.querySelector('#searchBox');

var weatherButton = document.querySelector('#weatherButton');

var cityName = document.querySelector('.city');

var tempCity = document.querySelector('.temperature');

var windCity = document.querySelector('.wind');

var humidCity = document.querySelector('.humidity');



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
    console.log("WEATHER INFO LIST 0",weatherInfo)
    // this list.[0] is referring to the first index of the list array in the console log that shows the temperature and other weather info.

    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].wind.speed)

    console.log("WEATHER INFO LIST 0",weatherInfo.list[0].main.humidity)

    console.log("WEATHER INFO",weatherInfo.list[0].weather[0].icon)
    document.querySelector(".icon").setAttribute("src","https://openweathermap.org/img/wn/" + weatherInfo.list[0].weather[0].icon + "@2x.png")

    let date = new Date(weatherInfo.list[0].dt * 1000)
    //  dt value means  milliseconds since Jan 1st 1970. It is multiplied(*) by 1000 to properly indicate the correct date.

    cityName.innerHTML=weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()

    tempCity.innerHTML= "Temp: " + weatherInfo.list[0].main.temp + " F"

    windCity.innerHTML= "Wind: " + weatherInfo.list[0].wind.speed + " mph"

    // document.querySelector(".icon").setAttribute("src","https://openweathermap.org/img/wn/" + + "@2x.png")
    

    humidCity.innerHTML= "Humidity: " + weatherInfo.list[0].main.humidity + " mph"

    console.log("WEATHER INFO LIST 0",weatherInfo.list[1].main.temp)

    console.log("WEATHER INFO LIST 0",weatherInfo.list[2].main.temp)

    temp1.innerHTML= "Temp: " + weatherInfo.list[1].main.temp + " F"
    humidity1.innerHTML= "Humidity: " + weatherInfo.list[1].main.humidity + " mph"

    wind1.innerHTML= "Wind: " + weatherInfo.list[1].wind.speed + " mph"

    cityName.innerHTML=weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()
    // im confused if this is right for the date showing for the future forecast..


    })
    });

    // Below is the section organizing the future first day Var initialization for the 5 day forecast from the current date's posted.

    var date1 = document.querySelector('.date1');

    var temp1 = document.querySelector('.temp1');

    
    
    var wind1 = document.querySelector('.wind1');
    
    var humidity1 = document.querySelector('.humidity1');

    var icon1 = document.querySelector('.icon1');

    // cityName.innerHTML=weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()
    // im confused if this is right for the date showing for the future forecast..




var bermuda = {
    name: "leroy",
    food: "turkey",
    carabou: true
}
console.log(bermuda.food)