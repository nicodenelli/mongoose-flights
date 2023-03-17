const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United']
        },
        airport: {
            type: String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        },
        // flightNo: (Number>10, Number<9999),
        departs: [String]


    })

module.exports = mongoose.model('Flight', flightSchema);