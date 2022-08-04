const countdown = (start, end) => {

    const 
		  MsPerDay = 1000 * 60 * 60 * 24,
		  todayDate = new Date(),
		  arrivalDate = new Date(start),
		  departureDate = new Date(end);

	let countdownDays = Math.round((arrivalDate - todayDate) / MsPerDay),
		durationDays = Math.round(departureDate - arrivalDate) / MsPerDay;

	let countdownMessage,
		durationMessage,
		countdown,
		duration,
		message,
		expired;

	if (countdownDays == 0) {
		countdownMessage = 'Your trip is today!';
		expired = false;

	} else {
		if (countdownDays > 0) {
			(countdownDays === 1)
			? countdown = '1 day'
			: countdown = `${countdownDays} days`;

			countdownMessage = `Your trip is ${countdown} away,`;
			expired = false;

		} else {
			let pastDate = Math.abs(countdownDays);
			(pastDate === 1)
			? countdown = '1 day'
			: countdown = `${pastDate} days`;

			countdownMessage = `It has been ${countdown} since your trip,`;
			expired = true;
		}
	}


	if (durationDays === 0) {
		durationMessage = `it is for less than one day`;

	} else {
		if (durationDays === 1) {
			duration = '1 day';

		} else {
			duration = `${durationDays} days`;
		}

		durationMessage = `it is for ${duration}`;
	}

	message = `${countdownMessage} and ${durationMessage}`;

	return {message: message, expired: expired};
}

export { countdown }