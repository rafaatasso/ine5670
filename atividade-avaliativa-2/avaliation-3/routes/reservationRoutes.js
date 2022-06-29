const router = require('express').Router()
const axios = require('axios').default;
const Reservation = require('../models/Reservation')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { client, vehicle, time_init_body, time_end_body } = req.body

    if (!client) {
        res.status(422).json({ error: 'O cliente é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!vehicle) {
        res.status(422).json({ error: 'O veículo é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!time_init_body) {
        res.status(422).json({ error: 'O horário de início é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!time_end_body) {
        res.status(422).json({ error: 'O horário de fim é obrigatório!'})
        return // Para parar de rodar o código
    }

    let time_init = new Date(time_init_body) 
    let time_end = new Date(time_end_body) 
    
    const reservation = {
        client,
        vehicle,
        time_init,
        time_end
    }

    try {
        // Validação da regra de negócio de tempo
        let time_with_vehicle = (time_end - time_init) / 3600000

        if (time_with_vehicle < 2 || time_with_vehicle > 6) {
            res.status(400).json({ message: 'Tempo de duração da reserva não é aceita!'})
            return
        }

        // Validação se já existe reserva para aquele veículo no dia e horário desejado
        let allReservations = await Reservation.find({ vehicle: vehicle });
        for (let reservation of allReservations) {
            let other_time_init = new Date(reservation.time_init);
            let other_time_end = new Date(reservation.time_end);
            if (other_time_init <= time_init && other_time_end >= time_end) {
                res.status(400).json({ message: "Já há uma reserva com esse carro nesse período!"})
                return
            }
        }

        // Criando os dados
        let reserve = await Reservation.create(reservation)

        let client_data = await axios.get(
        "http://localhost:8080/client/" + client
        );
    
        let vehicle_data = await axios.get("http://localhost:8080/vehicle/" + vehicle);
    
        console.log(vehicle_data.data.rent)
        console.log(time_with_vehicle)
        console.log(client_data.data.credit_card)
        console.log(reserve.id)
        // let billing_data = await axios.post("http://localhost:8080/billing/", {
        // price: vehicle_data.data.rent * time_with_vehicle,
        // credit_card: client_data.data.credit_card,
        // reserva_id: reserve.id,
        // });

        res.status(201).json({ message: 'Reserva cadastrada no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando Reserva na base
        const reservation = await Reservation.find()

        res.status(200).json(reservation)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar id exclusivo
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        // Buscando Reserva na base
        const reservation = await Reservation.findOne({ _id: id })

        if (!reservation) {
            res.status(422).json({ error: 'Um Reserva com esse id não foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(reservation)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar por cliente
router.get('/client/:id', async (req, res) => {
    const clientId = req.params.id

    try {
        // Buscando Reserva na base
        const reservation = await Reservation.find({ client: clientId })

        if (!reservation) {
            res.status(422).json({ error: 'Nenhuma reserva para esse cliente foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(reservation)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar por veículo
router.get('/vehicle/:id', async (req, res) => {
    const vehicleId = req.params.id

    try {
        // Buscando Reserva na base
        const reservation = await Reservation.find({ vehicle: vehicleId })

        if (!reservation) {
            res.status(422).json({ error: 'Nenhuma reserva para esse veículo foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(reservation)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const reservation = await Reservation.findOne({ _id: id })

    if (!reservation) {
        res.status(422).json({ error: 'O Reserva não foi encontrada na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Reservation.deleteOne({ _id: id })

        res.status(200).json({ message: 'Reserva deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
