const express = require('express')

const alunoController = require('../../controllers/aluno')
const professorController = require('../../controllers/professor')

const router = express.Router()

router.get('/', (req, res) => {
    if (req.session.usuario_id) {
        // Renderizar a página de ínicio
    } else {
        res.render('pages/index')
    }
})

router.get('/alunos', alunoController.consultar)

router.get('/professores', professorController.consultar)

module.exports = router

