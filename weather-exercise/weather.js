async function getWeatherData(cityName) {
    try {
        // noinspection JSUnresolvedReference
        const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        // noinspection JSUnresolvedReference
        return data.main.temp;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Test the function
getWeatherData('Hamburg')
    .then(temperature => console.log('Temperature in Hamburg is ' + temperature + ' degrees Celsius.'))
    .catch(error => console.error('Error fetching weather data:', error));
