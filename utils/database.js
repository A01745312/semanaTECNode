require('dotenv').config()

const Sequelize = require('sequelize')

// Objeto de conexion

const sequelize = new Sequelize ('semanatec', 'admin', 'Sapa11_15', {
    dialect: 'mysql',
    host: process.env.HOST,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = sequelize;