// SIDEBAR NAV
const menuToggle = document.querySelector('.menu-toggle input');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	navMenu.classList.toggle('slide');
});
