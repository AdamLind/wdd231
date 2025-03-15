const navlist = document.querySelector('.list-wrapper');
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const cardContainer = document.querySelector(".business-cards");
const gridLink = document.getElementById("grid")
const listLink = document.getElementById("list")

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    navlist.classList.toggle('show');
});

gridLink.addEventListener("click", () => {
    getData(1);
}) 

listLink.addEventListener("click", () => {
	getData(2);
})

getData(1);


let members = {}
async function getData(qualifier) {
    const url = "data/members.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        qualifier == 1 ?
        createCards(json)
        :
        qualifier ==2 ?
        createList(json)
        : null
    } catch (error) {
        console.error(error.message);
    }
}

function createCards(memberList) { 
    cardContainer.innerHTML = ''; // Clears all child nodes
    cardContainer.classList.remove('list-styles')
    cardContainer.classList.add('grid-display')
    memberList.map(member => {
        const card = document.createElement("div");
		card.classList.add("member")

        const cardTitle = document.createElement("div")
        cardTitle.classList.add("member-card-title")
        const cardContent = document.createElement("div")
        cardContent.classList.add("member-card-content")
        const cardImage = document.createElement("img")
        cardImage.classList.add("member-image")
        cardImage.setAttribute("src", `${member.icon}`)
        cardImage.setAttribute("alt", `Logo`)

        const cardInfo = document.createElement("div")
        cardInfo.classList.add("member-info")

        cardInfo.innerHTML =
        `
        <p><span class="bold">EMAIL:</span> ${member.email}</p>
        <p><span class="bold">PHONE:</span> ${member.phoneNumber}</p>
        <p><span class="bold">URL:</span> <a href="${member.webURL}">${member.webURL}</a></p>
        `

		cardTitle.innerHTML =
        `
        <h3>${member.name}</h3> 
        <p>${member.tagLine}</p>
        `
        cardContent.appendChild(cardImage)
        cardContent.appendChild(cardInfo)
        card.appendChild(cardTitle)
        card.appendChild(cardContent)
		cardContainer.appendChild(card)
	})
};

function createList(memberList) {
    cardContainer.innerHTML = ''
    cardContainer.classList.remove('grid-display')
    cardContainer.classList.add('list-styles')
    const list = document.createElement("table");
    list.classList.add("member-list")
    const listHead = document.createElement("tr")
    listHead.innerHTML = 
    `
    <th>Name</th>
    <th>Address</th>
    <th>Phone #</th>
    <th>Website</th>
    `
    list.appendChild(listHead)
    memberList.map(member => {
        const listItem = document.createElement("tr")
        listItem.innerHTML =
        `
        <td>${member.name}</td>
        <td>${member.address}</td>
        <td>${member.phoneNumber}</td>
        <td><a href="${member.webURL}">${member.webURL}</a></td>
        `
        list.appendChild(listItem)
	})
    cardContainer.appendChild(list)
};


