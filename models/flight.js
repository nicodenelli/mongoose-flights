const mongoose = require('mongoose')

const destinationsSchema = new mongoose.Schema({
      airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
      arrival: Date
    }
  );

const flightSchema = new mongoose.Schema({
        airline: {
            type: String,
            enum: ['American', 'Delta', 'Jet Blue', 'Southwest', 'Spirit', 'United']
        },
        airport: {
            type: String,
            enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        },
        flightNu: {
            type: Number,
            min: 11,
            max: 9998,
        },
        destinations: [destinationsSchema],
        departs: {
            type: Date,
            default: function () {
              return new Date().getFullYear();
            }
        }


    })

module.exports = mongoose.model('Flight', flightSchema);