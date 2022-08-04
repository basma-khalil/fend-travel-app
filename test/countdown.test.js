import { countdown } from '../src/client/js/countdown'


describe('Test countdown() to return message' , () => {

	const today = new Date();

	test('If duration less than one day, and countdown = 0', () => {
		const testCountdown = countdown(today, today);
		const testMessage = {
			message: 'Your trip is today! and it is for less than one day',
			expired: false
		};

		expect(testCountdown).toEqual(testMessage);
	});

	test('If duration = 1 day, and countdown = 1 day', () => {

		const testCountdown = countdown(today.setDate(today.getDate() + 1), today.setDate(today.getDate() + 1));

		const testMessage = {
			message: 'Your trip is 1 day away, and it is for 1 day',
			expired: false
		};

		expect(testCountdown).toEqual(testMessage);
	});

	test('If duration more than 1 day, and the trip is expired', () => {
		const testCountdown = countdown(today.setDate(today.getDate() - 4), today.setDate(today.getDate() + 2));
		const testMessage = {
			message: 'It has been 2 days since your trip, and it is for 2 days',
			expired: true
		};

		expect(testCountdown).toEqual(testMessage);
	});
});