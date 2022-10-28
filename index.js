// Librerias
const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const modeloIARoutes = require('./routes/modeloIA')
const ejemploBDRoutes = require('./routes/ejemploBD')
const sequelize = require('./utils/database')


// Crea servidor
const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


// Cargar las rutas
app.use(modeloIARoutes);
app.use('/usuario', ejemploBDRoutes);

// Ruta madre
app.get('/', (req,res) => {
    res.send('Servidor funcionando')
})

sequelize.sync()
    .then(resultado => {
        console.log('Conexion BD exitosa')
        // Verificar que funcione el servidor
        app.listen(8081, () => {
            console.log("Servidor en linea")
        })
    })
    .catch (error => console.log(error))