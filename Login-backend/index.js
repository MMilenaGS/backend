const express = require('express'); //como importar express
const morgan = require('morgan');
const apiRoutes = require('./routes');

const app = express();//app está hecha en express - instancia express en mi api

app.use(morgan('dev')); //middleware para detectar peticiones (morgan)

//primera ruta
app.get('/', (req, res) => {
    res.send('Hello World!');

})

