const Usuario = require('../models/ejemploDB');

exports.getUsuarios = async (req,res) => {
    // SELECT * FROM usuario;
    try {
        registros = await Usuario.findAll()
        res.send(registros)
    }catch (e) {
        console.log(e)
        res.send(e)
    }
}

exports.postAgregarUsuario = (req,res) => {
    console.log(req.body)
    // INSERT INTO usuario VALUES ()
    Usuario.create(req.body)
        .then(resultado => {
            console.log("Registro exitoso")
            res.send("Registro exitoso")
        })
        .catch(error => {
            console.log(error)
            res.send('Ocurrio un error')
        })
}