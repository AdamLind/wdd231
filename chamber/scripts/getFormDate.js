const formDate = document.getElementById("timestamp")
const changedDate = new Date(document.lastModified);

const t1 = changedDate.getHours().toString().padStart(2, '0');
const t2 = changedDate.getMinutes().toString().padStart(2, '0');
const t3 = changedDate.getSeconds().toString().padStart(2, '0');

const date = `${changedDate.toLocaleDateString()} ${t1}:${t2}:${t3}`

formDate.setAttribute("value", date)
