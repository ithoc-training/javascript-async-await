function getWeatherData(cityName) {

    // The environment variable must be set prior to running this example.
    // noinspection JSUnresolvedReference
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            console.log('Received response with status code ', response.status, '.');
            return response.json();
        })
        .then(payload => {
            console.log('Extracting payload...');
            // noinspection JSUnresolvedReference
            let temperature = payload.main.temp;
            console.log('Current temperatur in', cityName, 'is', temperature, 'degrees Celsius');
        });
    // Fetch has no catch handling as errors are reflected in http response status.
}

// Test the function
// noinspection JSIgnoredPromiseFromCall
getWeatherData('Hamburg');
getWeatherData('Munich');
