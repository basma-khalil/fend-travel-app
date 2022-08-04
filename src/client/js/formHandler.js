/* Function called by event listener */
const handleSubmit =  (event) => {

	event.preventDefault();

	const city = document.getElementById('city').value,
		  arrival = document.getElementById('start').value,
		  departure = document.getElementById('end').value;

	let userData = {city, arrival, departure};

	if (Client.validateForm(userData)) {

		Client.getCoordinate(city)

		.then(async (geographicData) => {

			let {country, latitude, longitude} = geographicData,

				imageURL = await Client.getImage(city, country),

				countdown = await Client.countdown(arrival, departure),

				countryData = await Client.getInformation(country),

				weatherData = await Client.getWeather(latitude, longitude);


			let apiData = {
				city,
				country,
				arrival,
				departure,
				countdown,
				imageURL,
				countryData,
				weatherData
			};

			Client.postData('http://localhost:8081/add-trip', apiData)
			.then((newData) => {
				// Update UI
				Client.updateUI(newData);
			});
		});
	}
};

export { handleSubmit }