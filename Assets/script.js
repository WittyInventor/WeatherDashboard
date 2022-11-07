var searchBox = document.querySelector('#searchBox');

var weatherButton = document.querySelector('#weatherButton');

var cityName = document.querySelector('.city');

weatherButton.addEventListener('click', function(){
    console.log("weatherButton")
    // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchBox.value}&appid=961c08e4a008934a3cf03bcaca4ac1f3`)
    .then(function(response) {/Users/annemariesheridan/Desktop/bootcamp/challenges/WeatherDashboard/Assets/06-server-side-apis-homework-demo.png
    console.log(response)
    if (!response.ok){
        throw response.json()
     } 
    return response.json();
    }).then(function(weatherInfo){
    console.log(weatherInfo)
    console.log(weatherInfo.city.name)

    cityName.innerHTML=weatherInfo.city.name 

    })

});




var bermuda = {
    name: "leroy",
    food: "turkey",
    carabou: true
}
console.log(bermuda.food)