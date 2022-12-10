const {DataTypes} = require('sequelize')
const db = require('../database/index')
const Aluno = require('./aluno')

/*
* Modelos
* Define suas tabelas do banco de dados (ORM)
* Gerencia seu banco de dados
*  */

const Professor = db.define('Professor', {
    nome: DataTypes.STRING,
    contato: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cargo: DataTypes.STRING
})

Professor.hasMany(Aluno)

module.exports = Professor
