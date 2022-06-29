const mongoose = require('mongoose')

const Vehicle = mongoose.model('Vehicle', {
    license_plate: String,
    year: Number,
    model: String,
    rent: Number
})

module.exports = Vehicle
