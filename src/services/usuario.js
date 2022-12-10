const Usuario = require('../models/usuario')

/*
* Serviços
* Regras de negócio da aplicação
*  */

const buscar = async ({ login, senha }) => {
    const usuario = await Usuario.findOne({ where: { login, senha } })

    if (!usuario) {
        throw new Error('Não existe esse usuário')
    }

    return usuario
}

const cadastrar = async ({ nome, login, senha, matricula }) => {
    const usuario = await Usuario.create({ nome, login, senha, matricula })

    return usuario
}

module.exports = {
    buscar, cadastrar
}
