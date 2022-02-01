"use strict"

/**
 * TODOS:
 *
 * 1. 5-day forecast (DONE)
 * 2. Drop pin
 *      2.1. when user drops pin
 *      2.2  grab the pin's coordinates
 *      2.3  update weather (current and 5 day forecast)
 *  3. have location search update 5-day forecast as well (DONE)
 *  4. Update marker location based on new search input
 *  5. Finalize switch cases to change card bg image. Refer to https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 *  6. Styling
 *
 **/

/***************   PROGRAM EXECUTION  *******************/

// El Paso Coordinates
const originLong = -106.2005;
const originLat = 31.8001;

// Default Weather View (El Paso)
getCurrentWeather(originLong, originLat);
getForecast(originLong, originLat);

/***************   WEATHER MAP SECTION  *******************/

// Get current weather in passed in location string
function getCurrentWeather(inputLong, inputLat){
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHER_KEY,
        lon: inputLong,
        lat: inputLat,
        units: "imperial"
    }).done(function (result) {

        // Card Header / Current Date and Time
        $("#current-date").text(formatUnixDate(result.dt));
        $("#current-time").text(formatUnixTime(result.dt));

        // Card Body
        $("#city-name").text(result.name);
        $("#weather-desc").text(result.weather[0].main);
        $("#current-temp").text(result.main.temp.toFixed(0) + " \u2109");
        $("#high-temp").text("H: " + result.main.temp_max.toFixed(0) + "\u2109");
        $("#low-temp").text("L: " + result.main.temp_min.toFixed(0) + "\u2109");

        // Card List
        $("#current-weather-details li:nth-child(1)").text("Description: " + result.weather[0].description);
        $("#current-weather-details li:nth-child(2)").text("Feels like: " + result.main.feels_like + " \u2109");
        $("#current-weather-details li:nth-child(3)").text("Humidity: " + result.main.humidity + "%");
        $("#current-weather-details li:nth-child(4)").text("Wind Speed: " + result.wind.speed + " miles/hour");
        $("#current-weather-details li:nth-child(5)").text("Pressure: " + result.main.pressure);

        // Render card body bg image
        renderWeatherBackgroundImage(result.weather[0].main);
    });
}

// Get weather forecast from passed in location string
function getForecast(inputLong, inputLat){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHER_KEY,
        lon: inputLong,
        lat: inputLat,
        units: "imperial"
    }).done(function(result){

        let currentTime = Date.now();
        let currentTimeStr = currentTime.toString().slice(0,-3); // remove last three digits to match convention in openweather api
        let unixTime24HoursFromNow = getNextDayUnixTime(currentTimeStr); // adds 24 hours to current time
        let dayCount = 1;  // keeps track of how many days we want to forecast

        // loop through result list
        for(let forecastObj of result.list){

            if(dayCount === 5){
                break;  // exit once we hit 5 days
            }

            // find most recent forecast that is closest to 24 hours from now
            if(forecastObj.dt >= unixTime24HoursFromNow){
                populateForecast(forecastObj, dayCount);
                unixTime24HoursFromNow = getNextDayUnixTime(unixTime24HoursFromNow);  // next 24 hours
                dayCount++;
            }
        }
    }).fail(function(){
        console.log("Failed to retrieve data");
    });
}

// renders data to forecast cards
function populateForecast(forecastObj,currentDay){
    // CARD HEADER
    $(`#forecast-date-${currentDay}`).text(formatUnixDate(forecastObj.dt));
    $(`#forecast-time-${currentDay}`).text(formatUnixTime(forecastObj.dt));

    // CARD BODY
    $(`#forecast-high-${currentDay}`).text("H: " + forecastObj.main.temp_max + "\u2109");
    $(`#forecast-low-${currentDay}`).text("L: " + forecastObj.main.temp_min + "\u2109");

    let icon = forecastObj.weather[0].icon;
    $(`#forecast-icon-${currentDay}`).attr("src",`http://openweathermap.org/img/w/${icon}.png`);

    // CARD LIST
    $(`#forecast-details-${currentDay} li:nth-child(1)`).text("Description: " + forecastObj.weather[0].description);
    $(`#forecast-details-${currentDay} li:nth-child(2)`).text("Humidity: " + forecastObj.main.humidity);
    $(`#forecast-details-${currentDay} li:nth-child(3)`).text("Wind Speed: " + forecastObj.wind.speed);
    $(`#forecast-details-${currentDay} li:nth-child(4)`).text("Pressure: " + forecastObj.main.pressure);
}

// Adds appropriate bg image based on weather description
function renderWeatherBackgroundImage(weather){
    let cardBodyBg = $("#current-weather .card-body");
    switch(weather){
        case "Clouds":
            cardBodyBg.css("background-image", "url(../assets/cloudy.jpg)");
            cardBodyBg.css("color", "black");
            break;
        case "Clear":
            cardBodyBg.css("background-image", "url(../assets/clear.jpg)");
            cardBodyBg.css("color", "white");
            break;
        default:
            cardBodyBg.css("background-image", "");
            break;
    }
}

/*****************  MAPBOX SECTION  **********************/

mapboxgl.accessToken = MAPBOX_KEY;
let currentMarker = [];  // holds current marker. only allowed to contain one at a time

// create map
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-106.40705, 31.938732] // long, lat  (EL PASO)
});

// Create a marker and center the map based on given address
$("#search-btn").click(function () {
    let search = $("#location-search-input").val();
    geocode(search, MAPBOX_KEY).then(function (results) {
        map.setZoom(10);
        map.setCenter(results);

        if(currentMarker.length > 0){
            let removeMarker = currentMarker.pop();
            removeMarker.remove();
        }

        let newMarker = new mapboxgl.Marker()
            .setLngLat([results[0], results[1]])
            .addTo(map);

        // assign as current marker
        currentMarker.push(newMarker);

        getCurrentWeather(results[0], results[1]);  // update current weather card
        getForecast(results[0], results[1]);  // update forecast row
    });
});

// adds marker on map on click and updates weather
map.on('click', function(e) {
    let coordinates = e.lngLat;
    console.log(coordinates);

    if(currentMarker.length > 0){
        let removeMarker = currentMarker.pop();
        removeMarker.remove();
    }

    let newMarker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

    currentMarker.push(newMarker);

    getCurrentWeather(coordinates.lng, coordinates.lat);
    getForecast(coordinates.lng, coordinates.lat);
});

/********************  UTILITIES  *****************************/

const unix24Hours = 86400;  // 24 hours in unix time stamp

// time from unix time stamp
function formatUnixTime(unixTime) {
    let date = new Date(unixTime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    // Will display time in HH:MM:SS format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

// date from unix time stamp
function formatUnixDate(unixTime) {
    let date = new Date(unixTime * 1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Will display date in YY-MM-DD
    return year + "-" + month + "-" + day;
}

// return unix time stamp that is 24 hours later
function getNextDayUnixTime(unixTime){
    return Number(unixTime) + unix24Hours;
}