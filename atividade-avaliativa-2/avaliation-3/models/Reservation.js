const mongoose = require('mongoose')

const Reservation = mongoose.model('Reservation', {
    client: {
        type: mongoose.ObjectId,
        ref: 'Client'
    },
    vehicle: {
        type: mongoose.ObjectId,
        ref: 'Vehicle'
    },
    time_init: Date,
    time_end: Date,
})

module.exports = Reservation
