/* Function to GET Web API Data*/
const getCoordinate = async (city) => {

	// Personal API Key for GeoNames API
	const baseURL = 'http://api.geonames.org/searchJSON?q=',
		  userName = `&fuzzy=0.8&username=${process.env.GEONAMES_USERNAME}`;

	// GET GeoNames API data
  	const res = await fetch(baseURL + city + userName);

	try {
		const data = await res.json();

		//Extract the required data from the response
		const geographicData = {
			country: data.geonames[0].countryName,
			latitude: data.geonames[0].lat,
			longitude: data.geonames[0].lng
		};

		return geographicData;

	} catch(error) {
		console.log('error', error);
		alert(`Oops, something went wrong
There is no data for your destination`);
		return {
			countryName: '',
			latitude: '',
			longitude: ''
		};
	}
};

export { getCoordinate }