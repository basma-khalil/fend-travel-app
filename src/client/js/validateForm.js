import moment from 'moment'

const validateForm = (userData) => {

	let {city, arrival, departure} = userData;
	
	const isDate = (date) => {
		return moment(date, "YYYY-MM-DD", true).isValid();
	};

	return (city === '' && !isNaN(city))

		   ? alert("Please enter the destination")

		   : (!isDate(arrival))

			   ? alert('Please enter a valid arrival date')

			   : (!isDate(departure))

				   ? alert('Please enter a valid departure date')

				   : (new Date(arrival) > new Date(departure))

					   ? alert('Please check your departure date')

					   : true;
}

export { validateForm }