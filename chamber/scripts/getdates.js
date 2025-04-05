const footerYear = document.getElementById("currentyear");
const footerEditedTime = document.getElementById("lastModified");
const today = new Date();
const modifiedDate = new Date(document.lastModified);

const hours = modifiedDate.getHours().toString().padStart(2, '0');
const minutes = modifiedDate.getMinutes().toString().padStart(2, '0');
const seconds = modifiedDate.getSeconds().toString().padStart(2, '0');

const fullDate = `${modifiedDate.toLocaleDateString()} ${hours}:${minutes}:${seconds}`
footerYear.innerHTML = `${today.getFullYear()}`;
footerEditedTime.innerHTML = `Last edit: ${fullDate}`;