require('dotenv').config()

const Sequelize = require('sequelize')

// Objeto de conexion

const sequelize = new Sequelize ('semanatec', 'admin', 'Sapa11_15', {
    dialect: 'mysql',
    host: 'teamtaiko.cs2l0gbpepod.us-east-1.rds.amazonaws.com',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = sequelize;