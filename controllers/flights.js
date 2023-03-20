const FlightModel = require('../models/flight')

module.exports = {
	new: newFlight,
	create,
	index
}


function index(req, res){

	FlightModel.find({})
			   .then(function(allFlights){

				console.log(allFlights, " <_ data from the db")
				
				res.render('flights/index', {flights: allFlights})
			  }).catch(function(err){
				console.log(err);
				res.send(err)
			  })

	
}


function create(req, res){
    (req.body, " <- contents of the form, req.body");
    FlightModel.create(req.body)
               .then(function(flightWeCreatedInTheDb){
                console.log(flightWeCreatedInTheDb, " <- flight document")
                res.redirect('/flights')
               }).catch((err) => {
                console.log(err);
                res.send('There was an error check the terminal, or log the err object')
               })
    
}


function newFlight(req, res){


	// Render looks in the views folder
	res.render('flights/new')
}