const addNote = (event) => {

	let notes = event.target.parentNode.querySelector('.notes');

	// Show note form
	event.target.classList.add('hide');
	notes.classList.remove('hide');
	notes.querySelector('form').classList.remove('hide');

	// Submit form
	notes.querySelector('.add-note').addEventListener('click', (event) => {

		event.preventDefault();
		notes.querySelector('form').classList.add('hide');
		notes.querySelector('.note').innerHTML = `
			<span class="close">&times;</span>
			${notes.querySelector('textarea').value.replace(/\r\n|\r|\n/g,"<br />")}
		`;
		notes.parentNode.querySelector('.note-btn').classList.remove('hide');
	
		// Delete notes
		notes.querySelector('.close').addEventListener('click', () => {
			notes.querySelector('.note').innerHTML = '';
			notes.classList.add('hide');
			notes.querySelector('form').reset();
		});
	});
}

export { addNote }