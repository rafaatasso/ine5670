const mongoose = require('mongoose')

const Client = mongoose.model('Client', {
    name: String,
    cpf: String,
    cnh: String,
    email: String,
    cellphone: Number,
    credit_card: Number,
})

module.exports = Client
