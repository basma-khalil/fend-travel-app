const addTrip = () => {
	const addTripBtn = document.getElementById('add-trip');
	const tripForm = document.getElementById('trip-form');

	tripForm.parentNode.classList.remove('hide');
	addTripBtn.classList.add('hide');

}

export { addTrip }