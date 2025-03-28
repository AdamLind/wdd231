const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const iconsrc = document.querySelector('#weather-icon');
const high = document.querySelector('#current-high');
const low = document.querySelector('#current-low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const tomorrowContainer = document.querySelector('#tomorrow-day')
const dayAfterContainer = document.querySelector('#day-after-day')
const currentForecast = document.querySelector('#current-forecast');
const tomorrowForecast = document.querySelector('#tomorrow-forecast');
const dayAfterForecast = document.querySelector('#day-after-forecast');


const currentUrl = 'https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=1VcvnXiJnX84QilrAKjPgXBAOoRew6YkosmA8qou'

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.23&lon=-111.66&appid=6ef125db37e311a81ba90af94ac76ec1&units=imperial'

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        // if (functionNum == 1)
        // {   
        //     console.log(data)
        //     displayCurrentResults(data); // uncomment when ready
        // }
        // else if (functionNum == 2)
        // {
        //     console.log(data)
        //     displayForecastResults(data);
        // }
    } else {
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

function displayCurrentResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherDesc.innerHTML = `${data.weather[0].main}`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "something here");
    high.innerHTML = `${data.main.temp_max}&deg;F`
    low.innerHTML = `${data.main.temp_min}&deg;F`
    humidity.innerHTML = `${data.main.humidity}%`
    let dateObj1 = new Date(data.sys.sunrise * 1000)
    let utcString1 = dateObj1.toString();
    let sunriseTime = utcString1.slice(16, 24);
    sunrise.innerHTML = `${sunriseTime}`
    let dateObj2 = new Date(data.sys.sunset * 1000)
    let utcString2 = dateObj2.toString();
    let sunsetTime = utcString2.slice(16, 24);
    sunset.innerHTML = `${sunsetTime}`
  }

function displayForecastResults(data) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayObj1 = new Date(data.list[6].dt * 1000)
    let dayObj2 = new Date(data.list[14].dt * 1000)
    
    tomorrowContainer.innerHTML = `${days[dayObj1.getDay()]}: `
    dayAfterContainer.innerHTML = `${days[dayObj2.getDay()]}: `
    currentForecast.innerHTML = `${data.list[6].main.temp}&deg;F`
    tomorrowForecast.innerHTML = `${data.list[8].main.temp}&deg;F`
    dayAfterForecast.innerHTML = `${data.list[16].main.temp}&deg;F`
}

apiFetch(currentUrl);
// apiFetch(forecastUrl, 2);
