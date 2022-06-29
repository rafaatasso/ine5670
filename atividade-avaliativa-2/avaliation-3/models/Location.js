const mongoose = require('mongoose')

const Location = mongoose.model('Location', {
    lat: String,
    long: String,
    vehicle: mongoose.ObjectId
})

module.exports = Location
