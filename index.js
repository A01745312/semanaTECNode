// Librerias
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload')
const modeloIARoutes = require('./routes/modeloIA')

// Crea servidor
const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Cargar las rutas
app.use(modeloIARoutes);

// Ruta madre
app.get('/', (req,res) => {
    res.send('Servidor funcionando')
})

// Verificar que funcione el servidor
app.listen(8081, () => {
    console.log("Servidor en linea")
})