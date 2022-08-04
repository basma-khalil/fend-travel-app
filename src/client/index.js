// Import JS files
import { showNav, showTopBtn, scrollToTop } from './js/app'
import { postData } from './js/postRoute'
import { getCoordinate } from './js/geographicData'
import { getWeather } from './js/weatherData'
import { getImage } from './js/mediaData'
import { getInformation } from './js/countryData'
import { countdown } from './js/countdown'
import { addTrip } from './js/addTrip'
import { removeTrip } from './js/removeTrip'
import { addNote } from './js/addNote'
import { updateUI } from './js/updateUI'
import { validateForm } from './js/validateForm'
import { handleSubmit } from './js/formHandler'


// Import style files
import './styles/resets.scss'
import './styles/global.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/aside.scss'
import './styles/trip-form.scss'
import './styles/main.scss'
import './styles/footer.scss'


// Import images
import favicon from './media/favicon.png'
import intro from './media/intro.png'
import world from './media/world.png'
import location from './media/map-pin.png'
import calendar from './media/calendar.png'
import error from './media/error404.jpg'


// Event listener to add functions to existing HTML DOM elements
window.addEventListener('scroll', showTopBtn);
document.querySelector('.top-btn').addEventListener('click', scrollToTop);
document.getElementById('nav__btn').addEventListener('click', showNav);
document.getElementById('add-trip').addEventListener('click', addTrip);
document.getElementById('generate').addEventListener('click', handleSubmit);


export {
	showNav,
	showTopBtn,
	scrollToTop,
	postData,
	getCoordinate,
	getWeather,
	getImage,
	getInformation,
	countdown,
	addTrip,
	removeTrip,
	addNote,
	updateUI,
	validateForm,
    handleSubmit,
}