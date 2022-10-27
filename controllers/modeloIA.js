const path = require('path');
const TeachableMachine = require('@sashido/teachablemachine-node')

const model = new TeachableMachine ({
    modelUrl : "http://teachablemachine.withgoogle.com/models/o_sDZ8zxI/"
})


exports.getFormularioImagen = (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioImagen.html'));
};

exports.postUpload = async (req,res) => {
    const {image} = req.files;
    if (!image) return res.send("Error al enviar imagen")
    await image.mv(path.join(__dirname, '..', 'public', 'img', image.name));
    model.classify({
        imageUrl: "http://localhost:8081/img/" + image.name
    }).then((prediccion) => {
        res.send(prediccion)
    }).catch((e) => res.send(e))
};