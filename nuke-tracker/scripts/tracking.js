const selecter = document.querySelector('#select');

async function getData() {
  const url = "data/reactors.json";
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      createSelectOptions(json)

  } catch (error) {
      console.error(error.message);
  }
}

function createSelectOptions(plants) { 
	plants.map(plant => {
		const option = document.createElement("option");
        option.value = plant.id
		option.innerHTML = plant.reactor
		selecter.appendChild(option)
})};

getData();