const router = require('express').Router()

const Client = require('../models/Client')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { name, cpf, cnh, email, cellphone, credit_card } = req.body

    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cpf) {
        res.status(422).json({ error: 'O CPF é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cnh) {
        res.status(422).json({ error: 'O nº da CNH é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!email) {
        res.status(422).json({ error: 'O e-mail é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cellphone) {
        res.status(422).json({ error: 'O nº de celular é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!credit_card) {
        res.status(422).json({ error: 'O nº do cartão é obrigatório!'})
        return // Para parar de rodar o código
    }

    const client = {
        name, 
        cpf,
        cnh,
        email,
        cellphone,
        credit_card
    }

    try {
        // Criando os dados
        await Client.create(client)

        res.status(201).json({ message: 'Cliente cadastrado no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando cliente na base
        const client = await Client.find()

        res.status(200).json(client)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar id exclusivo
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        // Buscando cliente na base
        const client = await Client.findOne({ _id: id })

        if (!client) {
            res.status(422).json({ error: 'Um cliente com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(client)
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

    const { name, cpf, cnh, email, cellphone, credit_card } = req.body

    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cpf) {
        res.status(422).json({ error: 'O CPF é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cnh) {
        res.status(422).json({ error: 'O nº da CNH é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!email) {
        res.status(422).json({ error: 'O e-mail é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!cellphone) {
        res.status(422).json({ error: 'O nº de celular é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!credit_card) {
        res.status(422).json({ error: 'O nº do cartão é obrigatório!'})
        return // Para parar de rodar o código
    }

    const client = {
        name, 
        cpf,
        cnh,
        email,
        cellphone,
        credit_card
    }

    try {
        // Buscando cliente na base
        const updatedClient = await Client.updateOne({ _id: id_code }, client)

        if (updatedClient.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Um cliente com esse id não foi encontrado na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(client)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id_del = req.params.id

    const client = await Client.findOne({ _id: id_del })

    if (!client) {
        res.status(422).json({ error: 'O cliente não foi encontrado na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Client.deleteOne({ _id: id_del })

        res.status(200).json({ message: 'Cliente deletado com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

module.exports = router