/* Function to GET Web API Data*/
const getWeather = async (latitude, longitude) => {

	// Personal API Key for Weatherbit API
	const baseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?',
		  apiKey = `&key=${process.env.WEATHERBIT_KEY}`;

	// GET Weatherbit API data
	const res = await fetch(baseURL + `&lat=${latitude}&lon=${longitude}` + apiKey);

	try {
		const data = await res.json();

		// Extract the required data from the response
		const weatherData = {
			temp: data.data[0].temp,
		 	tempDes: data.data[0].weather.description,
		 	tempIcon: data.data[0].weather.icon,
			maxTemp: data.data[0].max_temp,
			minTemp: data.data[0].min_temp,
		}

		return weatherData;

	} catch(error) {
		console.log('error', error);
		alert(`Oops, something went wrong
There is no data for your destination`);
		return {
			temp: '',
		 	tempDes: '',
		 	tempIcon: 'https://via.placeholder.com/100.png/fff/fff'
		}
	}
};

export { getWeather }