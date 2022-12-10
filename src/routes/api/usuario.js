const express = require('express')
const usuarioController = require('../../controllers/usuario')
//const alunoController = require('../../controllers/aluno')

const router = express.Router()

router.post('/login', usuarioController.login)

router.post('/cadastro', usuarioController.cadastro)

//router.post('/aluno', alunoController.aluno)



module.exports = router
