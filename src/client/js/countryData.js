/* Function to GET Web API Data*/
const getInformation = async (country) => {

	// REST Countries API
	const baseURL = 'https://restcountries.eu/rest/v2/name/';

	// GET REST Countries API data
  	const res = await fetch(baseURL + country);

	try {
		const data = await res.json();

		//Extract the required data from the response
		const countryData = {
			subregion: data[0].subregion,
			language: data[0].languages[0].name,
			timezone: data[0].timezones[0],
			currency: data[0].currencies[0].name,
			callingCodes: data[0].callingCodes[0],
			flag: data[0].flag
		};

		return countryData;

	} catch(error) {
		console.log('error', error);
		alert(`Oops, something went wrong
There is no data for your destination`);
		return {
			subregion: 'missing data',
			language: 'missing data',
			timezone: 'missing data',
			currency: 'missing data',
			callingCodes: 'missing data',
			flag: ''
		};
	}
};

export { getInformation }