const express = require('express')

const usuarioRouter = require('./usuario')

const alunoController = require('../../controllers/aluno')

const professorController = require('../../controllers/professor')

const router = express.Router()

router.use('/usuarios', usuarioRouter)

router.get('/', (req, res) => {
    res.send('Bruno API')
})

router.post('/alunos', alunoController.criar)

router.post('/professores', professorController.criar)








module.exports = router

