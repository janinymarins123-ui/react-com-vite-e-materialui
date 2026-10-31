const express = require('express');
const cors = require('cors');

const usuarioRotas = require('./rotas/usuarioRotas');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/usuarios', usuarioRotas);

module.exports = app;