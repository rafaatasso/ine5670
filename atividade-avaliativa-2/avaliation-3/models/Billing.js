const mongoose = require('mongoose')

const Billing = mongoose.model('Billing', {
    price: Number,
    credit_card: Number,
    reservation: {
        type: mongoose.ObjectId,
        ref: 'Reservation'
    },
    definitive: {
        type: Boolean,
        default: false,
    }
})

module.exports = Billing
