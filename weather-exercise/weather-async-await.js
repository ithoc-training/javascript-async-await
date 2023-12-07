async function getWeatherData(cityName) {

    // The environment variable must be set prior to running this example.
    // noinspection JSUnresolvedReference
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    const responsePromise = await fetch(apiUrl);
    console.log('Received response with status code ', responsePromise.status, '.');
    const payload = await responsePromise.json();

    // noinspection JSUnresolvedReference
    console.log('Current temperatur in', cityName, 'is', payload.main.temp, 'degrees Celsius');
}

// Test the function
// noinspection JSIgnoredPromiseFromCall
getWeatherData('Hamburg');
// noinspection JSIgnoredPromiseFromCall
getWeatherData('Munich');
