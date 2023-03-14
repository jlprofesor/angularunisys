const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Directorio Público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/productos', require('./routes/productos'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor en ejecución en puerto ${process.env.PORT}`);
});
//
