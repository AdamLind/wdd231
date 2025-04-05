const message = document.getElementById("message");
const cardContainer = document.getElementById("item-container");
let visitCount = localStorage.getItem('visitCount');
const visitTime = localStorage.getItem('dateVisited');
const currentTime = Date.now()
const daysSince = (currentTime - visitTime) / 86400000

if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount);
}
visitCount++;

if (visitCount == 1) {
    message.textContent = "Welcome! Let us know if you have any questions.";
}
else if (daysSince < 1) {
    message.textContent = "Back so soon! Awesome!";
}
else if (daysSince > 1) {
    message.textContent = `You last visited ${Math.floor(daysSince)} days ago.`;
}

localStorage.setItem('visitCount', visitCount.toString());

function visitMessage() {
    console.log(visitTime)
    localStorage.setItem('dateVisited', Date.now()); // Stores a string value
}

async function getData() {
    const url = "data/interests.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        createCards(json)
    } catch (error) {
        console.error(error.message);
    }
}

function createCards(interestList) { 
    cardContainer.innerHTML = ''; // Clears all child nodes
    interestList.map(interest => {
        const card = document.createElement("div");
        const cardTitle = document.createElement("h2")
        const cardContent = document.createElement("div")
        const cardLeftContent = document.createElement("div")
        const cardImage = document.createElement("figure")
        const cardAddress = document.createElement("address")
        const cardInfo = document.createElement("p")
        const cardButton = document.createElement("button")
        
		card.classList.add("interest")
        cardTitle.classList.add("interest-card-title")
        cardContent.classList.add("interest-card-content")
        cardInfo.classList.add("interest-description")

		cardTitle.innerHTML =
        `
        ${interest.name}
        `
        
        cardImage.innerHTML = 
        `
        <img class="interest-image" src="${interest.image_link}" alt="Image" />
        `
        
        cardAddress.innerHTML =
        `
        ${interest.address}
        `
        
        cardInfo.innerHTML =
        `
        <p><span class="bold">Description:</span> ${interest.description}</p>
        `

        cardButton.innerHTML =
        `
        Learn More
        `

        cardLeftContent.appendChild(cardTitle)
        cardLeftContent.appendChild(cardImage)
        cardLeftContent.appendChild(cardAddress)
        cardContent.appendChild(cardInfo)
        cardContent.appendChild(cardButton)
        card.appendChild(cardLeftContent)
        card.appendChild(cardContent)
		cardContainer.appendChild(card)
	})
};



visitMessage();
getData();