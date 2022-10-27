const Sequelize = require('sequelize');

// Traer el objeto de conexion
const sequelize = require('../utils/database');

const Usuario = sequelize.define('usuario', {
    usuario: {
        type: Sequelize.STRING(40),
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
});

module.exports = Usuario;