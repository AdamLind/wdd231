const dataTable = document.getElementById('data')

export async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        // listInfo(data)
        return data;
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
}

export async function getReactorNames() {
  const url = "data/reactors.json";
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      return json
      
    } catch (error) {
      console.error(error.message);
    }
}

export async function listInfo(apiUrl) {
  var dataFetch = await apiFetch(apiUrl)
  const data = dataFetch.response.data
  data.forEach((line) => {
    const list = document.createElement('tr')
    const date = document.createElement('td')
    const capacity = document.createElement('td')
    const outageMw = document.createElement('td')
    const outagePercent = document.createElement('td')
    date.textContent = `${line.period}`
    capacity.textContent = `${line.capacity} MW`
    outageMw.textContent = `${line.outage}`
    outagePercent.textContent = `${line.percentOutage}%`
    list.append(date)
    list.append(capacity)
    list.append(outageMw)
    list.append(outagePercent)
    dataTable.append(list)
  })
}