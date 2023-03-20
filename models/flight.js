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
            content: Number,
            enum: {type: Number, min: 10, max: 9999, default: 745}
        },
        departs: {
            type: Number,
            default: function () {
              return new Date().getFullYear();
            }
        }


    })

module.exports = mongoose.model('Flight', flightSchema);