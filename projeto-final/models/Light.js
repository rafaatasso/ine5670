const mongoose = require('mongoose')

const Light = mongoose.model('Light', {
    nickname: String, 
    quantityWanted: Number,
    actualQuantity: Number,
    status: {
        type: Boolean,
        default: false,
    },
    partyMode: {
        type: Boolean,
        default: false,
    }
})

module.exports = Light
