var whateverArrName = ["item0", "item1", "item2"]

whateverArrName[2]

var searchBox = document.querySelector('#searchBox');

var weatherButton = document.querySelector('#weatherButton');

var cityName = document.querySelector('.city');

var tempCity = document.querySelector('.temperature');

var windCity = document.querySelector('.wind');

var humidCity = document.querySelector('.humidity');

var nextdayWeatherCards = document.querySelectorAll('.card');
console.log(nextdayWeatherCards)


weatherButton.addEventListener('click', function () {
    console.log("weatherButton")
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchBox.value}&units=imperial&appid=961c08e4a008934a3cf03bcaca4ac1f3`)
        .then(function (response) {
            console.log(response)
            if (!response.ok) {
                throw response.json()
            }
            return response.json();
        }).then(function (weatherInfo) {
            console.log(weatherInfo)
            console.log("WEATHER INFO LIST 0", weatherInfo)
            // this list.[0] is referring to the first index of the list array in the console log that shows the temperature and other weather info.

            console.log("WEATHER INFO LIST 0", weatherInfo.list[0].wind.speed)

            console.log("WEATHER INFO LIST 0", weatherInfo.list[0].main.humidity)

            console.log("WEATHER INFO", weatherInfo.list[0].weather[0].icon)
            document.querySelector(".icon").setAttribute("src", "https://openweathermap.org/img/wn/" + weatherInfo.list[0].weather[0].icon + "@2x.png")

            let date = new Date(weatherInfo.list[0].dt * 1000)
            //  dt value means  milliseconds since Jan 1st 1970. It is multiplied(*) by 1000 to properly indicate the correct date.

            cityName.innerHTML = weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()

            tempCity.innerHTML = "Temp: " + weatherInfo.list[0].main.temp + " F"

            windCity.innerHTML = "Wind: " + weatherInfo.list[0].wind.speed + " mph"

            // document.querySelector(".icon").setAttribute("src","https://openweathermap.org/img/wn/" + + "@2x.png")


            humidCity.innerHTML = "Humidity: " + weatherInfo.list[0].main.humidity + " mph"

            console.log("WEATHER INFO LIST 0", weatherInfo.list[1].main.temp)

            console.log("WEATHER INFO LIST 0", weatherInfo.list[2].main.temp)

            

            // cityName.innerHTML=weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()
            // im confused if this is right for the date showing for the future forecast..

            for (let i = 0; i < nextdayWeatherCards.length; i++) {
                console.log(weatherInfo.list[(i*8)])
                console.log(nextdayWeatherCards[i].children[0])
                nextdayWeatherCards[i].children[0].innerHTML=weatherInfo.list[i*8].dt_txt
                // nextdayWeatherCards[i].children[0] means targeting the specific element of nextdayWeatherCards which is children. 

                nextdayWeatherCards[i].children[1].setAttribute("src", "https://openweathermap.org/img/wn/" + weatherInfo.list[i*8].weather[0].icon + "@2x.png")
                nextdayWeatherCards[i].children[2].innerHTML = "Temp: " + weatherInfo.list[(i*8)].main.temp + " F"
            
                nextdayWeatherCards[i].children[3].innerHTML = "Humidity: " + weatherInfo.list[(i*8)].main.humidity + " mph"
               
                nextdayWeatherCards[i].children[4].innerHTML = "Wind: " + weatherInfo.list[(i*8)].wind.speed + " mph"

           
            }
            
        })
});

// Below is the section organizing the future first day Var initialization for the 5 day forecast from the current date's posted.


var date1 = document.querySelector('.date1');

var temp1 = document.querySelector('.temp1');



var wind1 = document.querySelector('.wind1');

var humidity1 = document.querySelector('.humidity1');

var icon1 = document.querySelector('.icon1');

// for (var i = 0; i < dailyForecast.length; i + 4) {

// }

// create the 5 day forecast using what is called Recursion. This basically means that you'll call the function within itself!

// cityName.innerHTML=weatherInfo.city.name + "  " + (date.getMonth() + 1) + "/" + date.getDate()
// im confused if this is right for the date showing for the future forecast..




var bermuda = {
    name: "leroy",
    food: "turkey",
    carabou: true
}
console.log(bermuda.food)