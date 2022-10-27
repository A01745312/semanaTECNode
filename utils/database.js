require('dotenv').config()

const Sequelize = require('sequelize')

// Objeto de conexion

const sequelize = new Sequelize (process.env.DB, process.env.USER, process.env.PASSWORD, {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = sequelize;