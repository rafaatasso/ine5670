const router = require('express').Router()

const Billing = require('../models/Billing')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { price, credit_card, reservation, definitive } = req.body

    if (!price) {
        res.status(422).json({ error: 'O preço é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!credit_card) {
        res.status(422).json({ error: 'O cartão é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!reservation) {
        res.status(422).json({ error: 'A reserva é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!definitive) {
        let definitive = false
    }

    const billing = {
        price,
        credit_card,
        reservation,
        definitive
    }

    try {
        // Criando os dados
        await Billing.create(billing)

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
        const billing = await Billing.find()

        res.status(200).json(billing)
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
        const billing = await Billing.findOne({ _id: id })

        if (!billing) {
            res.status(422).json({ error: 'Um Cobrança com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(billing)
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

    const { price, credit_card, reservation, definitive } = req.body

    if (!price) {
        res.status(422).json({ error: 'O preço é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!credit_card) {
        res.status(422).json({ error: 'O cartão é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!reservation) {
        res.status(422).json({ error: 'A reserva é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!definitive) {
        let definitive = false
    }

    const billing = {
        price,
        credit_card,
        reservation,
        definitive
    }

    try {
        // Buscando Cobrança na base
        const updatedBilling = await Billing.updateOne({ _id: id_code }, billing)

        if (updatedBilling.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Um Cobrança com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(billing)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id_del = req.params.id

    const billing_del = await Billing.findOne({ _id: id_del })
    console.log(billing_del)

    if (!billing_del) {
        res.status(422).json({ error: 'O Cobrança não foi encontrado na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Billing.deleteOne({ _id: id_del })

        res.status(200).json({ message: 'Cobrança deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error })
    }
})

module.exports = router
