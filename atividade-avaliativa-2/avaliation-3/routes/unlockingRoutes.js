const router = require('express').Router()

const Unlocking = require('../models/Unlocking')

// Criação dos dados
router.post('/', async (req, res) => {
    //Req Body
    const { lock, reservation } = req.body

    if (!lock) {
        res.status(422).json({ error: 'O status da trava é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!reservation) {
        res.status(422).json({ error: 'A reserva é obrigatória!'})
        return // Para parar de rodar o código
    }

    const unlocking = {
        lock, 
        reservation
    }

    try {
        // Criando os dados
        await Unlocking.create(unlocking)

        res.status(201).json({ message: 'Trava cadastrado no sistema com sucesso!'})
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Leitura das informações
router.get('/', async (req, res) => {
    try {
        // Buscando Trava na base
        const unlocking = await Unlocking.find()

        res.status(200).json(unlocking)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Buscar id exclusivo
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        // Buscando Trava na base
        const unlocking = await Unlocking.findOne({ _id: id })

        if (!unlocking) {
            res.status(422).json({ error: 'Um Trava com esse id não foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(unlocking)
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

    const { lock, reservation } = req.body

    if (!lock) {
        res.status(422).json({ error: 'O status da trava é obrigatório!'})
        return // Para parar de rodar o código
    }

    if (!reservation) {
        res.status(422).json({ error: 'A reserva é obrigatória!'})
        return // Para parar de rodar o código
    }

    const unlocking = {
        lock,
        reservation
    }

    try {
        // Buscando Trava na base
        const updatedUnlocking = await Unlocking.updateOne({ _id: id_code }, unlocking)

        if (updatedUnlocking.matchedCount === 0) {
            // matchedCount Mostra quantos dados foram atualizados
            res.status(422).json({ error: 'Uma Trava com esse id não foi encontrada na base!'})
            return // Para parar de rodar o código
        }

        res.status(200).json(unlocking)
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

//Deletar id exclusivo
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const unlocking = await Unlocking.findOne({ _id: id })

    if (!unlocking) {
        res.status(422).json({ error: 'A Trava não foi encontrada na base!'})
        return // Para parar de rodar o código
    }

    try {
        await Unlocking.deleteOne({ _id: id })

        res.status(200).json({ message: 'Trava deletada com sucesso!' })
    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

// Desbloqueia o veículo
router.delete('/reservation/:id', async (req, res) => {
    const id = req.params.id

    try {
        reserveActive = await axios.get(
        "http://localhost:8080/reservation/" + id + "/on"
        );
    
        if (reserveActive.status === 200) {
            const result = await Unlocking.updateOne(
                { lock: false },
                { reservation: id }
            )
            if (result.matchedCount === 0) {
                res.status(422).json({ message: 'Nenhuma trava encontrada com esse ID!' })
                return
            }

            res.status(200).json({ message: 'Trava atualizada com sucesso!' })
            return
        } else { 
            res.status(400).json({ message: 'Essa reserva não está ativa no momento.' })
        }

    } catch (error) {
        // Enviando mensagem de erro
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
