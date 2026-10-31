const express = require('express');
const router = express.Router();

const usuarioControlador = require('../controladores/usuarioControlador');

// Rotas de usuário
router.get('/', usuarioControlador.listarUsuarios);
router.get('/:id', usuarioControlador.buscarUsuario);
router.post('/', usuarioControlador.criarUsuario);
router.put('/:id', usuarioControlador.atualizarUsuario);
router.delete('/:id', usuarioControlador.excluirUsuario);

module.exports = router;