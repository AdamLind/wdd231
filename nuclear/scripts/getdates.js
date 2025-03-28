const footerYear = document.getElementById("currentyear");
const footerEditedTime = document.getElementById("lastModified");
const today = new Date();
const modifiedDate = new Date(document.lastModified);

const hours = today.getHours().toString().padStart(2, '0');
const minutes = today.getMinutes().toString().padStart(2, '0');
const seconds = today.getSeconds().toString().padStart(2, '0');


footerYear.innerHTML = `${today.getFullYear()}`;
footerEditedTime.innerHTML = `Last edit: ${modifiedDate.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;