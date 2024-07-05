const api_key = "a4abd867cb1154d871e778c8848a9970"
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function getWeather(city) {
    const response = await fetch(api_url + city+ `&appid=${api_key}`)
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
    const data = await response.json()
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


    if(data.weather[0].main == "Clear") {
        weatherIcon.src = "weather-app-img/images/clear.png"
    }

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-img/images/clouds.png"
    }

    if(data.weather[0].main == "Rain") {
        weatherIcon.src = "weather-app-img/images/rain.png"
    }

    if(data.weather[0].main == "Mist") {
        weatherIcon.src = "weather-app-img/images/mist.png"
    }

    if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block"

}
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})


