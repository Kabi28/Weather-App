const valElement = document.getElementById('input');
const weatherElement = document.getElementById('weather')

function getWeather() {

    const val = valElement.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=70104b26af39356cbf2833a33aaa4bc4&units=metric`)
        .then(response => {
            if (response.status == 404) {
                document.getElementById('error').style.display = 'block'
                document.getElementById('main').style.display = 'none'

            } else {
                return response.json()
            }
        })
        .then(data => {
            document.getElementById('place-name').innerText = data.name;
            document.getElementById('deg-val').innerText = Math.round(data.main.temp) + '°C';
            document.getElementById('humidity-data').innerText = data.main.humidity + '%';
            document.getElementById('wind-data').innerText = Math.round(data.wind.speed) + ' Km/h';


            if (data.weather[0].main == 'Mist') {
                weatherElement.src = 'images/mist.png'
            } else if (data.weather[0].main == 'Clear') {
                weatherElement.src = 'images/clear.png'
            } else if (data.weather[0].main == 'Clouds') {
                weatherElement.src = 'images/clouds.png'
            } else if (data.weather[0].main == 'Drizzle') {
                weatherElement.src = 'images/drizzle.png'
            } else if (data.weather[0].main == 'Rain') {
                weatherElement.src = 'images/rain.png'
            } else if (data.weather[0].main == 'Snow') {
                weatherElement.src = 'images/snow.png'
            }

        })

    document.getElementById('error').style.display = 'none'
    document.getElementById('main').style.display = 'block'
}
