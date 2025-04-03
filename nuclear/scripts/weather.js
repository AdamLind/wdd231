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

const plantRef = [
    {reactor: "Fermi", id: 1729},
    {reactor: "Monticello", id: 1922},
    {reactor: "Prairie Island", id: 1925},
    {reactor: "Clinton Power Station", id: 204},
    {reactor: "Wolf Creek Generating Station", id: 210},
    {reactor: "PSEG Salem Generating Station", id: 2410},
    {reactor: "Nine Mile Point Nuclear Station", id: 2589},
    {reactor: "Peach Bottom", id: 3166},
    {reactor: "H B Robinson", id: 3251},
    {reactor: "Oconee", id: 3265},
    {reactor: "Columbia Generating Station", id: 371},
    {reactor: "Surry", id: 3806},
    {reactor: "Point Beach", id: 4046},
    {reactor: "Waterford 3", id: 4270},
    {reactor: "Browns Ferry", id: 46},
    {reactor: "Millstone", id: 566},
    {reactor: "Donald C Cook", id: 6000},
    {reactor: "Joseph M Farley", id: 6001},
    {reactor: "Palo Verde", id: 6008},
    {reactor: "Calvert Cliffs Nuclear Power Plant", id: 6011},
    {reactor: "Brunswick", id: 6014},
    {reactor: "Harris", id: 6015},
    {reactor: "Perry", id: 6020},
    {reactor: "Braidwood Generation Station", id: 6022},
    {reactor: "Byron Generating Station", id: 6023},
    {reactor: "LaSalle Generating Station", id: 6026},
    {reactor: "Catawba", id: 6036},
    {reactor: "McGuire", id: 6038},
    {reactor: "Beaver Valley", id: 6040},
    {reactor: "St Lucie", id: 6045},
    {reactor: "Edwin I Hatch", id: 6051},
    {reactor: "Grand Gulf", id: 6072},
    {reactor: "Diablo Canyon", id: 6099},
    {reactor: "PPL Susquehanna", id: 6103},
    {reactor: "Limerick", id: 6105},
    {reactor: "James A Fitzpatrick", id: 6110},
    {reactor: "Seabrook", id: 6115},
    {reactor: "PSEG Hope Creek Generating Station", id: 6118},
    {reactor: "R. E. Ginna Nuclear Power Plant", id: 6122},
    {reactor: "V C Summer", id: 6127},
    {reactor: "Comanche Peak", id: 6145},
    {reactor: "Davis Besse", id: 6149},
    {reactor: "Sequoyah", id: 6152},
    {reactor: "Callaway", id: 6153},
    {reactor: "North Anna", id: 6168},
    {reactor: "Turkey Point", id: 621},
    {reactor: "South Texas Project", id: 6251},
    {reactor: "River Bend Station", id: 6462},
    {reactor: "Vogtle", id: 649},
    {reactor: "Watts Bar Nuclear Plant", id: 772}
];

const currentUrl = 'https://api.eia.gov/v2/nuclear-outages/us-nuclear-outages/data/?frequency=daily&data[0]=capacity&data[1]=outage&data[2]=percentOutage&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=25&api_key=1VcvnXiJnX84QilrAKjPgXBAOoRew6YkosmA8qou'

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



function getObjectByProperty(list, property, value) {
    return list.find(obj => obj[property] === value);
  }

const obj1 = getObjectByProperty(plantRef, "reactor", "River Bend Station")
console.log(obj1)

