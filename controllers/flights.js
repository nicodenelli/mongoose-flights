const FlightModel = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function create(req, res){
    
    req.body.cast = req.body.cast.split(',') 
    req.body.nowShowing = !!req.body.nowShowing;
    console.log(req.body, " <- contents of the form, req.body")

    flightModel.create(req.body)
        .then(function(flightWeCreatedInTheDb){
        console.log(flightWeCreatedInTheDb, " <-flight document")
        res.redirect('/flights'); 

    }).catch((err)=> {
        console.log(err);
        res.send('There was an error, check the terminal, or log the err object')
    })
}

function newFlight(req, res){


	// Render looks in the views folder
	res.render('flights/new')
}