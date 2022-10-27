const express = require('express')
const router = express.Router();
const ejemploBDController = require('../controllers/ejemploBD')


// Mostrar registro (SELECT * FROM Usuario)
router.get('/mostrarUsuarios', ejemploBDController.getUsuarios);

// Agregar registro (INSERT INTO Usuario)
router.post('/agregarUsuario', ejemploBDController.postAgregarUsuario);

module.exports = router;