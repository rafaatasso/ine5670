const router = require('express').Router()

const Vehicle = require('../models/Vehicle')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { license_plate, year, model, rent } = req.body

    if (!license_plate) {
        res.status(422).json({ error: 'A placa é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!year) {
        res.status(422).json({ error: 'O ano é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!model) {
        res.status(422).json({ error: 'O modelo é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!rent) {
        res.status(422).json({ error: 'O aluguel é obrigatório!'})
        return // Para parar de rodar o código
    }

    const vehicle = {
        license_plate,
        year,
        model,
        rent
    }

    try {
        // Criando os dados
        await Vehicle.create(vehicle)

        res.status(201).json({ message: 'Veículo cadastrado no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando Veículo na base
        const vehicle = await Vehicle.find()

        res.status(200).json(vehicle)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar placa exclusiva
router.get('/:license_plate', async (req, res) => {
    const license_plate = req.params.license_plate

    try {
        // Buscando Veículo na base
        const vehicle = await Vehicle.findOne({ license_plate: license_plate })

        if (!vehicle) {
            res.status(422).json({ error: 'Um Veículo com esse license_plate não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(vehicle)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Atualização
// Pode ser por PUT ou PATCH
// PATCH é uma atualização parcial dos dados
router.patch('/:license_plate', async (req, res) => {
    const license_plate_code = req.params.license_plate

    const { license_plate, year, model, rent } = req.body

    if (!license_plate) {
        res.status(422).json({ error: 'A placa é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!year) {
        res.status(422).json({ error: 'O ano é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!model) {
        res.status(422).json({ error: 'O modelo é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!rent) {
        res.status(422).json({ error: 'O aluguel é obrigatório!'})
        return // Para parar de rodar o código
    }

    const vehicle = {
        license_plate,
        year,
        model,
        rent
    }

    try {
        // Buscando Veículo na base
        const updatedVehicle = await Vehicle.updateOne({ license_plate: license_plate_code }, vehicle)

        if (updatedVehicle.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Um Veículo com esse license_plate não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(vehicle)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar license_plate exclusivo
router.delete('/:license_plate', async (req, res) => {
    const license_plate = req.params.license_plate

    const vehicle = await Vehicle.findOne({ license_plate: license_plate })

    if (!vehicle) {
        res.status(422).json({ error: 'O Veículo não foi encontrado na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Vehicle.deleteOne({ license_plate: license_plate })

        res.status(200).json({ message: 'Veículo deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

module.exports = router