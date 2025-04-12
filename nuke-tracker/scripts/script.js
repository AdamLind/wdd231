const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const navwrap = document.querySelector('.list-wrapper')

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navwrap.classList.toggle('show');
});
