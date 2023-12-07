# Weather Exercise

## Goal
Read the weather data for a given city from a public API (here OpenWeatherMap). Analyse the response structure
and print out the temperature of your given city. 

## Tasks
1. Sign up for OpenWeatherMap (openweathermap.org) to generate your API key.
2. Use the HTTP request URL via a GET method as follows: 
https://api.openweathermap.org/data/2.5/weather?q=Hamburg&units=metric&appid=YOUR_API_KEY
*Example*:
```bash
curl --location 'https://api.openweathermap.org/data/2.5/weather?q=Hamburg&units=metric&appid=YOUR_API_KEY'
```
Details about the ```fetch``` method can be found here: https://javascript.info/fetch.
3. Receive the promise returned by the ```fetch()``` method and digest the response by ```.then()``` and ```.catch()```.
   For now use the promise. Later, you will convert it to async/await. 
4. Pull out the temperature from the response. It can be found through "main" -> "temp". Print it out.

*Note*:

*Version 2.5 enables the city name to get current weather for. From version 3 on, you need to 
fetch the city from separate geo data API https://openweathermap.org/api/geocoding-api.*

## Environment Variables

Never store or save API keys, passwords, or the like, in your code and thus the Git repository. Use environment 
variables to configure and pass in values for security purposes. 

**How to use environment variables in PowerShell**:
**Set env variable**:
```
$env:OPEN_WEATHER_MAP_API_KEY='YOUR_API_KEY'
```

**List all env variables**:
```
dir env:
```
