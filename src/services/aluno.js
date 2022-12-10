const Aluno = require('../models/aluno')

const criar = async ({ nome, professor_id, usuario_id }) => {
    const aluno = await Aluno.create({ nome, professor_id, usuario_id })

    return aluno
}

const consultar = async () => {
    const alunos = await Aluno.findAll()

    return alunos
}

module.exports = { criar, consultar }
