// Show - hide navigation menu
const showNav = () => {

	const navIcon = document.getElementById('nav__btn'),
		  navBar = document.getElementById('navbar');
	navIcon.classList.toggle('open');
	navBar.classList.toggle('show--nav');
}


// Show go to top button
const showTopBtn = () => {
	const topBtn = document.querySelector('.top-btn');

	(document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100)
	? topBtn.classList.add('show--btn')
	: topBtn.classList.remove('show--btn');
};

// Scroll to top function
const scrollToTop = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


export { showNav, showTopBtn, scrollToTop }