const removeTrip = (event) => {

	event.target.parentNode.parentNode.parentNode.classList.remove('show--trip');

	setTimeout(() => {
		event.target.parentNode.parentNode.parentNode.remove();
	}, 5000);

}

export { removeTrip }