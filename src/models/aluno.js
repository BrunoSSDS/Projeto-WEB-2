const {DataTypes} = require('sequelize')
const db = require('../database/index')
const Materia = require('./materia')

/*
* Modelos
* Define suas tabelas do banco de dados (ORM)
* Gerencia seu banco de dados
*  */

const Aluno = db.define('Aluno', {
    nome: DataTypes.STRING
})

Aluno.hasMany(Materia)

module.exports = Aluno
