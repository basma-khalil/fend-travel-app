/* Function to GET Web API Data*/
const getImage = async (city, country) => {

	// Personal API Key for Pixabay API
	const baseURL = 'https://pixabay.com/api/?',
		  apiKey = `key=${process.env.PIXABAY_KEY}&q=`,
		  query = '&image_type=photo&orientation=horizontal&category=travel&min_width=640&min_height=320&safesearch=true';

	// Incase multi-word city names
	let location = city.replace(/ /g, '+')

	// GET Pixabay API data
	let res = await fetch(baseURL + apiKey + location + query);

	try {
		let data = await res.json();

		// If the entered location brings up no results
		if (data.total === 0) {

			// Use the country name
			location = country.replace(/ /g, '+');
			res = await fetch(baseURL + apiKey + location + query);
			data = await res.json();
		}

		// Extract the required data from the response (random photo)
		const imageURL = data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL;

		return imageURL;

	} catch(error) {
		console.log('error', error);
		alert(`Oops, something went wrong
There is no data for your destination`);
		return '../media/error404.jpg';
	}
};

export { getImage }