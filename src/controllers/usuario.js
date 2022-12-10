const usuarioService = require('../services/usuario')

/*
* Controles
* Gerencia a requisição e a resposta
*  */

const login = async (req, res) => {
    const { login, senha } = req.body || {}

    try {
        const usuario = await usuarioService.buscar({ login, senha })

        req.session.usuario_id = usuario.id

        // res.redirect('/inicio')
        res.send(usuario)
    } catch (error) {
        res.status(401).send(error.message)
    }
}

const cadastro = async (req, res) => {
    const { nome, login, senha, matricula } = req.body || {}

    try {
        const novoUsuario = await usuarioService.cadastrar({ nome, login, senha, matricula })

        if (novoUsuario) {
            res.status(200).send({ novoUsuario })
        } else {
            res.status(400).send({ erro: 'Não foi possível cadastrar o usuário' })
        }

    } catch (error) {
        res.status(400).send({ erro: 'Não foi possível cadastrar o usuário' })
    }
    
}





const logout = async (req, res) => {
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    login, cadastro, logout
}
