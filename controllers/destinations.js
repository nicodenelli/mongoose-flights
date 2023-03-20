// import my flightModel so I can find the flight I want to add a destination too
const FlightModel = require('../models/flight');

module.exports = {
	create
}

function create(req, res){
	console.log(req.body)
	// Use a Model to find the flight with an id (req.params.id)
	FlightModel.findById(req.params.id)
			   .then(function(flightDoc){

					console.log(flightDoc)
					// mutating a document, 
					// adding/or removing/updating 
					// something found from the database
					flightDoc.destinations.push(req.body);
					// save the document to tell mongodb I changed something, cuz this 
					// exists on my express server, mongodb doesn't know I added req.body
                    // to the flights destinations array
					flightDoc.save()
								 .then(function(){
									res.redirect(`/flights/${req.params.id}`)
								 })
					

						// Then with the flight I found, I want to add a destination to the flight's
                        // destinations array to create a destination

			   }).catch(err =>{
				console.log(err);
				res.send(err)
			   })

}