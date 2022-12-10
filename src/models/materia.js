const {DataTypes} = require('sequelize')
const db = require('../database/index')

/*
* Modelos
* Define suas tabelas do banco de dados (ORM)
* Gerencia seu banco de dados
*  */

const Materia = db.define('Materia', {
    nome: DataTypes.STRING,
    nota: DataTypes.INTEGER
})

module.exports = Materia
