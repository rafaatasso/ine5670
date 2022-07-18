const mongoose = require('mongoose')

const Unlocking = mongoose.model('Unlocking', {
    lock: Boolean,
    reservation: {
        type: mongoose.ObjectId,
        ref: 'Reservation',
    }
})

module.exports = Unlocking
