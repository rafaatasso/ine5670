const mongoose = require('mongoose')

const Location = mongoose.model('Location', {
    lat: String,
    long: String,
    vehicle: {
        type: mongoose.ObjectId,
        ref: 'Vehicle',
    }
})

module.exports = Location
