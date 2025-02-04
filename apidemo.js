let city = document.getElementById("cityName")
function fetchWeather(params) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=efa9f8b8f67521c72fb3942d5afd3961`)
        .then(response => response.json())
        .then(data => {
            let ele = document.getElementById("result");
            ele.innerHTML = `<p>${data.main.temp}&degC</p>`;
        })
        .catch(error => console.log(error))
    
}
// fetchWeather();
