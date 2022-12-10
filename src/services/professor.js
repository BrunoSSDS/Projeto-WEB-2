const Professor = require('../models/professor')

const criar = async ({ nome, contato, endereco, cargo, usuario_id }) => {
    const professor = await Professor.create({ nome, contato, endereco, cargo, usuario_id })

    return professor
}

const consultar = async () => {
    const professores = await Professor.findAll()

    return professores
}

module.exports = { criar, consultar }
