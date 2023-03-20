const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
        airline: {
            type: String,
            enum: ['American', 'Delta', 'Jet Blue', 'Southwest', 'Spirit', 'United']
        },
        airport: {
            type: String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        },
        flightNo: {
            type: Number,
            min: [10],
            max: [9999]
        },
        departs: [Date]


    })

module.exports = mongoose.model('Flight', flightSchema);