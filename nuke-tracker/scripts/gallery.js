const cardContainer = document.getElementById("home-images");
const modalCardContainer = document.getElementById("modal-interior")
  
function createStationCards(stations, container) { 
	stations.map(station => {
		const card = document.createElement("div");
		card.classList.add("card")
		card.innerHTML =
			`
			<img src="${station.image}" loading="lazy" alt="${station.name}">
			<div class="card-content">
				<h2>${station.name}</h2>
				<p><span class="info-title">Built:</span> ${station.completed}</p>
				<p><span class="info-title">Generation Capacity:</span> ${station.capacity_mwe} MWE</p>
			</div>
			`
		if (container == 1) {
			cardContainer.appendChild(card)
		}
		else if (container == 2) {
			modalCardContainer.appendChild(card)
		}
})};

async function getReactorNames() {
	const url = "data/stations.json";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		
		const json = await response.json();
		createRandomCards(json)
		
	  } catch (error) {
		console.error(error.message);
	  }
}

async function createRandomCards(stationList) { 
	
	var newStationList = []
    for (let i = 0; i < 2; i++) {
		let rnd = Math.floor(Math.random() * stationList.length)
		newStationList.push(await stationList[rnd])
		stationList.splice(rnd, 1)
    }
	createStationCards(newStationList, 1)
	createStationCards(stationList, 2)
};

getReactorNames()