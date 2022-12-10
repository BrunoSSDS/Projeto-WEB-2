const {Router} = require('express');
const professorService = require('../services/professor')
const roteador = Router();
/*
* Controles
* Gerencia a requisição e a resposta
*  */

const criar = async (req, res) => {
    const { usuario_id } = req.session
    const { nome, contato, endereco, cargo } = req.body

    try {
        const professor = await professorService.criar({ nome, contato, endereco, cargo, usuario_id })
        res.status(200).send(professor)
    } catch (e) {
        res.status(400).send({})
    }
}

const consultar = async (req, res) => {

    try {
        const professores = await professorService.consultar()

        // Precisa enviar os professores para a pagina
        res.render('pages/professores')
    } catch (e) {
        res.status(400).send({})
    }
}

roteador.delete('/:id', async (req, res)=>{
    await Comentario.destroy(
        {
            where: 
            {
                id:req.params.id
            }
        }
    );
    res.status(200).redirect('/professor');
    
});


module.exports = {
    criar, consultar
}
