const alunoService = require('../services/aluno')

/*
* Controles
* Gerencia a requisição e a resposta
*  */

const criar = async (req, res) => {
    const { usuario_id } = req.session
    const { professor_id, nome } = req.body

    try {
        const aluno = await alunoService.criar({ nome, usuario_id, professor_id })
        res.status(200).send(aluno)
    } catch (e) {
        res.status(400).send({})
    }
}

const consultar = async (req, res) => {

    try {
        const alunos = await alunoService.consultar()

        // Precisa enviar os alunos para a pagina
        res.render('pages/alunos')
    } catch (e) {
        res.status(400).send({})
    }
}


module.exports = {
    criar, consultar
}
