const Aluno = require('./aluno')
const Professor = require('./professor')
const Materia = require('./materia')
const {DataTypes} = require('sequelize')
const db = require('../database/index')

/*
* Modelos
* Define suas tabelas do banco de dados (ORM)
* Gerencia seu banco de dados
*  */

const Usuario = db.define('Usuario', {
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    matricula: DataTypes.STRING
})

Usuario.hasMany(Aluno)
Usuario.hasMany(Materia)
Usuario.hasMany(Professor)

module.exports = Usuario
