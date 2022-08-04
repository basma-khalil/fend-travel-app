/* Function to GET Project Data */

const updateUI = (apiData) => {

	let {city, country, arrival, departure, countdown, imageURL, countryData, weatherData} = apiData;

	const tripsContainer = document.querySelector('.trips-container'),
		  addTripBtn = document.getElementById('add-trip'),
		  tripStarts = document.querySelectorAll('.arrival'),
		  tripForm = document.getElementById('trip-form'),
		  fragment = document.createDocumentFragment(),
		  newTrip = document.createElement('article'),
		  html = `
			  <section class="trip__overview flex--col" style="background-image: url('${imageURL}');">
				  <div class="overview__details">
					  <h2 class="destination">${city}, ${country}</h2>
					  <div class="date">From <span class="arrival">${arrival}</span> - To ${departure}</div>
					  <div class="countdown">${countdown.message}</div>
				  </div>
			  </section>

			  <div class="trip__info flex--row">
				  <div class="data flex--col">
					  <div class="country child flex--row">
						  <div class="country__data">
							  <div><span>location: </span>${countryData.subregion}</div>
							  <div><span>currency: </span>${countryData.currency}</div>
							  <div><span>language: </span>${countryData.language}</div>
						  </div>
						  <figure class="flag">
							  <img src="${countryData.flag}">
						  </figure>
					  </div>

					  <div class="weather child flex--row">
						  <div class="temp">
							  <div class="temp__current">
							  	  ${weatherData.temp}<sup>°c</sup>
							  </div>
							  <div class="temp__des">
							  	  ${weatherData.tempDes}
							  </div>
						  </div>
						  <figure class="icon">
							  <img src="https://www.weatherbit.io/static/img/icons/${weatherData.tempIcon}.png" alt="Weather icon">
						  </figure>
					  </div>
				  </div>

				  <div class="note-wrap flex--col">
					  <section class="notes child hide">
						  <h3>my notes</h3>
						  <form>
							  <textarea></textarea>
							  <button class="add-note minor--btn">add</button>
						  </form>
						  <div class="note"></div>
					  </section>
					  <button class="note-btn minor--btn" type="button">add notes</button>
					  <button class="delete minor--btn" type="submit">Remove Trip</button>
				  </div>
			  </div>
		  `;

	newTrip.classList.add('trip', 'flex--col');
	newTrip.insertAdjacentHTML('afterbegin', html);
	newTrip.querySelector('.delete').addEventListener('click', Client.removeTrip);
	newTrip.querySelector('.note-btn').addEventListener('click', Client.addNote);

	// Change expired trip style
	(countdown.expired === true)
	? newTrip.classList.add('expired')
	: newTrip.classList.remove('expired');

	// Insert new trip to document
	fragment.appendChild(newTrip);
	tripsContainer.prepend(fragment);

	// To get the scale effect
	setTimeout(() => {

		// Show new trip
		newTrip.classList.add('show--trip');
		// Hide the form and show the addTrip Button
		tripForm.parentNode.classList.add('hide');
		tripForm.reset();
		addTripBtn.classList.remove('hide');
	}, 100);

};

export { updateUI }