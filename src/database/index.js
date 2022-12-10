const { Sequelize } = require('sequelize')

const config = require('../config/index')

const db = new Sequelize(config)

module.exports = db
