const cardContainer = document.querySelector(".business-cards");
const gridLink = document.getElementById("grid")
const listLink = document.getElementById("list")


let members = {}

async function getData() {
    const url = "data/members.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json)
        createRandomCards(json)
    } catch (error) {
        console.error(error.message);
    }
}

function createRandomCards(memberList) { 
    cardContainer.innerHTML = ''; // Clears all child nodes
    let newMemberList = []
    for (let i = 0; i < 3; i++) {
        while (true) {
            let rnd = Math.floor(Math.random() * memberList.length)
            if (memberList[rnd].membershipLevel == "Gold" || memberList[rnd].membershipLevel == "Silver") {
                newMemberList.push(memberList[rnd])
                break;
            }
            else {
                continue;
            }
        }
    }
    newMemberList.map(member => {
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

getData();