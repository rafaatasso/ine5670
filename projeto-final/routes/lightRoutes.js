const router = require('express').Router()

const Light = require('../models/Light')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { quantityWanted, actualQuantity, status, partyMode } = req.body

    if (!quantityWanted) {
        res.status(422).json({ error: 'A quantidade de luz é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!actualQuantity) {
        res.status(422).json({ error: 'A quantidade de luz atual é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!status) {
        res.status(422).json({ error: 'O status da luz é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!partyMode) {
        res.status(422).json({ error: 'O status da balada é obrigatório!'})
        return
    }

    const light = {
        quantityWanted,
        actualQuantity,
        status,
        partyMode
    }

    try {
        // Criando os dados
        await Light.create(light)

        res.status(201).json({ message: 'Cobrança cadastrado no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando Cobrança na base
        const light = await Light.find()

        res.status(200).json(light)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar id exclusivo
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        // Buscando Cobrança na base
        const light = await Light.findOne({ _id: id })

        if (!light) {
            res.status(422).json({ error: 'Um Cobrança com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(light)
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

    const { quantityWanted, actualQuantity, status, partyMode } = req.body

    if (!quantityWanted) {
        res.status(422).json({ error: 'A quantidade de luz é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!actualQuantity) {
        res.status(422).json({ error: 'A quantidade de luz atual é obrigatória!'})
        return // Para parar de rodar o código
    }

    if (!status) {
        res.status(422).json({ error: 'O status da luz é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!partyMode) {
        res.status(422).json({ error: 'O status da balada é obrigatório!'})
        return
    }

    const light = {
        quantityWanted,
        actualQuantity,
        status,
        partyMode
    }

    try {
        const updateLight = await Light.updateOne({ _id: id_code }, light)

        if (updateLight.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Um luz com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(light)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id_del = req.params.id

    const light_del = await Light.findOne({ _id: id_del })
    console.log(light_del)

    if (!light_del) {
        res.status(422).json({ error: 'O Cobrança não foi encontrado na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Light.deleteOne({ _id: id_del })

        res.status(200).json({ message: 'Cobrança deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error })
    }
})

module.exports = router
