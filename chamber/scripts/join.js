let params = new URLSearchParams(location.search);
const fname = params.get('fname')
const lname = params.get('lname')
const title = params.get('title')
const email = params.get('email')
const phone = params.get('phone')
const busName = params.get('bus-name')
const timestamp = params.get('timestamp')

const fnameContainer = document.getElementById('fname')
const lnameContainer = document.getElementById('lname')
const titleContainer = document.getElementById('title')
const emailContainer = document.getElementById('email')
const phoneContainer = document.getElementById('phone')
const busNameContainer = document.getElementById('busName')
const timestampContainer = document.getElementById('timestamp')

fnameContainer.innerHTML = `${fname}`
lnameContainer.innerHTML = `${lname}`
titleContainer.innerHTML = `${title}`
emailContainer.innerHTML = `${email}`
phoneContainer.innerHTML = `${phone}`
busNameContainer.innerHTML = `${busName}`
timestampContainer.innerHTML = `${timestamp}`