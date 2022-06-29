const router = require('express').Router()

const Location = require('../models/Location')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { lat, long, vehicle } = req.body

    if (!lat) {
        res.status(422).json({ error: 'A latitude é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!long) {
        res.status(422).json({ error: 'A longitude é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!vehicle) {
        res.status(422).json({ error: 'O veículo é obrigatório!'})
        return // Para parar de rodar o código
    }

    const location = {
        lat,
        long,
        vehicle
    }

    try {
        // Criando os dados
        await Location.create(location)

        res.status(201).json({ message: 'Localização cadastrada no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando Localização na base
        const location = await Location.find()

        res.status(200).json(location)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar id exclusivo
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        // Buscando Localização na base
        const location = await Location.findOne({ _id: id })

        if (!location) {
            res.status(422).json({ error: 'Um Localização com esse id não foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(location)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Atualização
// Pode ser por PUT ou PATCH
// PATCH é uma atualização parcial dos dados
router.patch('/:id', async (req, res) => {
    const id_code = req.params.id

    const { lat, long, vehicle } = req.body
    
    if (!lat) {
        res.status(422).json({ error: 'A latitude é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!long) {
        res.status(422).json({ error: 'A longitude é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!vehicle) {
        res.status(422).json({ error: 'O veículo é obrigatório!'})
        return // Para parar de rodar o código
    }

    const location = {
        lat,
        long,
        vehicle
    }

    try {
        // Buscando Localização na base
        const updatedLocation = await Location.updateOne({ _id: id_code }, location)

        if (updatedLocation.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Um Localização com esse id não foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(location)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const location = await Location.findOne({ _id: id })

    if (!location) {
        res.status(422).json({ error: 'O Localização não foi encontrada na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Location.deleteOne({ _id: id })

        res.status(200).json({ message: 'Localização deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
