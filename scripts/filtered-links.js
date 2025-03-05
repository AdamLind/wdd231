const navlist = document.querySelector('.list-wrapper');
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const linkContainer = document.getElementById("links");
const creditContainer = document.getElementById("credits");
const allLink = document.getElementById("all");
const cseLink = document.getElementById("cse");
const wddLink = document.getElementById("wdd");

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


allLink.addEventListener("click", () => {
	allLink.checked = true;
	createLinks(courses);
})

cseLink.addEventListener("click", () => {
	let filteredLinks = courses.filter(link => link.subject == "CSE")
	createLinks(filteredLinks)
}) 

wddLink.addEventListener("click", () => {
	let filteredLinks = courses.filter(link => link.subject == "WDD")
	createLinks(filteredLinks)
})

function createLinks(filteredLinks) { 
	linkContainer.innerHTML = ''; // Clears all child nodes
	creditContainer.innerHTML = ''; // Clears all child nodes
	filteredLinks.map(link => {
		const card = document.createElement("a");
		card.classList.add("filteredLink")
		link.completed ? 
			card.classList.add("filteredLinkComplete")
		: null
		// card.setAttribute("href", link.githubUrl)
		card.innerHTML =
			`
			${link.subject} ${link.number}
			`
		linkContainer.appendChild(card)
	})
	const creditsArray = []
	for (i in filteredLinks) {
		creditsArray.push(filteredLinks[i].credits)
		console.log(creditsArray)
	}
	const creditTotal = creditsArray.reduce((acc, x) => acc + x, 0)
	const creditCard = document.createElement("p");
	creditCard.innerHTML = 
	`
	The total number of credits listed below is ${creditTotal}
	`
	console.log(creditTotal)
	creditContainer.appendChild(creditCard)
};

createLinks(courses);


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navlist.classList.toggle('show');
	title.classList.toggle('disappear');
	header.classList.toggle('head-rearrange');
	navwrap.classList.toggle('show');
});