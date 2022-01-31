"use strict"


// CURRENT
$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: WEATHER_KEY,
    q:     "El Paso, US",
    units: "imperial"
}).done(function(result){
    console.log(result);
    console.log(result.main)
    console.log(result.name);
    console.log(result.weather[0].main);
    console.log(result.main.temp_max);
    console.log(result.main.temp_min);

    $("#city-name").text(result.name);
    $("#weather-desc").text(result.weather[0].main);
    $("#current-temp").text(result.main.temp.toFixed(0));
    $("#high-temp").text("H: " + result.main.temp_max.toFixed(0));
    $("#low-temp").text("L: " + result.main.temp_min.toFixed(0));

    $("#current-weather-details li:nth-child(1)").text("Feels like: " + result.main.feels_like);
    $("#current-weather-details li:nth-child(2)").text("Humidity: " + result.main.humidity + "%");
    $("#current-weather-details li:nth-child(3)").text("Pressure: " + result.main.pressure);
    $("#current-weather-details li:nth-child(4)").text("Wind Speed: " + result.wind.speed + " miles/hour");

});
//
// function kelvinToF(k){
//     return (((k-273.15)*1.8)+32).toFixed(0);
// }

// FORECAST
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: WEATHER_KEY,
    q:     "El Paso, US"
}).done(function(result){
    console.log(result.list);
})