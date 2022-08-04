import { validateForm } from '../src/client/js/validateForm'


describe('Test validateForm() should be true' , () => {
    it('Should be true', () => {

		const testUserData = {
			city: 'cairo',
			arrival: '2020-01-01',
			departure: '2020-02-02'
		};

		const testValidateForm = validateForm(testUserData);

        expect(testValidateForm).toBe(true);
    });
});