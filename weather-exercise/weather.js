async function getWeatherData(cityName) {

        // noinspection JSUnresolvedReference
        const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        const responsePromise= await fetch(apiUrl);
        const data = await responsePromise.json();

        // noinspection JSUnresolvedReference
        console.log('Temperature in Hamburg is ' + data.main.temp + ' degrees Celsius.');
}

// Test the function
// noinspection JSIgnoredPromiseFromCall
getWeatherData('Hamburg');
