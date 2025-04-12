import { apiFetch, getReactorNames, listInfo } from "./modules.mjs";

// Get all needed params from the url
let params = new URLSearchParams(location.search);
const plant = params.get('Select')
const reactorId = params.get('Select');
const startDate = params.get('start-date');
const endDate = params.get('end-date');
const fname = params.get('fname')

// Get the header for the ticket element
const ticketHead = document.getElementById("ticket-head")

// Get the visitCount from local storage or, if it doesn't exist yet, set it equal to 0. Then increase the count by 1 for each visit
let visitCount = localStorage.getItem('visitCount');
if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem('visitCount', visitCount);

// The URL to pull all api info from modified using the form that was filled out eariler
const apiUrl = `https://api.eia.gov/v2/nuclear-outages/facility-nuclear-outages/data/?frequency=daily&data[0]=capacity&data[1]=outage&data[2]=percentOutage&facets[facility][]=${reactorId}&start=${startDate}&end=${endDate}&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=1VcvnXiJnX84QilrAKjPgXBAOoRew6YkosmA8qou`
  

async function drawChart() {
  var dataArray = [
    ['Date', 'Production', 'Outage'],
  ]
  
  var reactorDataFetch = await apiFetch(apiUrl)
  const reactorData = reactorDataFetch.response.data
  
  for (let i = reactorData.length - 1; i >= 0; i--) {
    dataArray.push([reactorData[i].period, parseFloat(reactorData[i].capacity - reactorData[i].outage), parseFloat(reactorData[i].outage)])
  }
  
  var data = google.visualization.arrayToDataTable(dataArray);
  
  var options = {
    backgroundColor: 'white',
    colors: ['blue', 'red'],
    isStacked: true,
    title: 'Reactor Performance (MW)',
    hAxis: {title: 'Date',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };
  
  var chart = new google.visualization.AreaChart(document.getElementById('my-chart'));
  chart.draw(data, options);
}

window.onload = async function() {
  const reactors = await getReactorNames();
  let plantName = reactors.find(plantName => plantName.id === Number(plant)).reactor
  
  if (visitCount === 1) {
    document.getElementById('visit-counter').textContent = `Hey, ${fname}! Congrats on tracking your first nuclear plant! 🎉`
    localStorage.setItem('visitCount', visitCount);
  } else {
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-counter').textContent = `Hey, ${fname}! Thanks for researching ${plantName} with us! To date, you've used our service ${visitCount} times.`;
  }
  
  ticketHead.textContent = `${plantName}`
  
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
}

window.onresize = function() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
}

listInfo(apiUrl);