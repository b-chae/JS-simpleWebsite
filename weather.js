const weather = document.querySelector(".js-weather")

const COORDS = 'coords'
const API_KEY = '219b75f4fe23afc01291e79950be5c40'

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json()
        })
        .then(function(json){
            const temperature = json.main.temp
            const place = json.name

            weather.innerText = `${temperature}℃ @ ${place}`
        })
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude, longitude)
    getWeather(latitude, longitude)
}

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS)
    askForCoords()
}

function init(){
    loadCoords()
}

init()