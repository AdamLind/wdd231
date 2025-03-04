const navlist = document.querySelector('.list-wrapper');
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const linkContainer = document.getElementById("links");
const allLink = document.getElementById("all")
const cseLink = document.getElementById("cse")
const wddLink = document.getElementById("wdd")

const links = [
	{
	  courseName: "CSE 110",
	  complete: true,
	  type: "cse",
	  githubUrl: "/",
	},
	{
	  courseName: "WDD 130",
	  complete: true,
	  type: "wdd",
	  githubUrl: "/",
	},
	{
	  courseName: "CSE 111",
	  complete: true,
	  type: "cse",
	  githubUrl: "/",
	},
	{
	  courseName: "CSE 210",
	  complete: false,
	  type: "cse",
	  githubUrl: "/",
	  area: 6861,
	},
	{
	  courseName: "WDD 131",
	  complete: true,
	  type: "wdd",
	  githubUrl: "/",
	},
	{
	  courseName: "WDD 231",
	  complete: false,
	  type: "wdd",
	  githubUrl: "/",
	},
	// Add more temple objects here...
  ];


allLink.addEventListener("click", () => {
	allLink.checked = true;
	createLinks(links);
})

cseLink.addEventListener("click", () => {
	let filteredLinks = links.filter(link => link.type == "cse")
	createLinks(filteredLinks)
}) 

wddLink.addEventListener("click", () => {
	let filteredLinks = links.filter(link => link.type == "wdd")
	createLinks(filteredLinks)
})

function createLinks(filteredLinks) { 
	linkContainer.innerHTML = ''; // Clears all child nodes
	filteredLinks.map(link => {
		const card = document.createElement("a");
		card.classList.add("filteredLink")
		link.complete ? 
			card.classList.add("filteredLinkComplete")
		: null
		card.setAttribute("href", link.githubUrl)
		card.innerHTML =
			`
			${link.courseName}
			`
		linkContainer.appendChild(card)
})};

createLinks(links);


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navlist.classList.toggle('show');
	title.classList.toggle('disappear');
	header.classList.toggle('head-rearrange');
	navwrap.classList.toggle('show');
});