const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Start up an instance of app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


// Setup empty JS object to act as endpoint for all routes
let travelData = [];

// Initialize the main project folder
app.use(express.static('dist'));

// GET method route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// POST method route
app.post('/add-trip', function (req, res) {
	let tripData = req.body;
	travelData.push(tripData);
	res.send(travelData[travelData.length - 1]);
	console.log(travelData);
});



// Setup Server
const port = 8081;
const server = app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});


module.exports = server