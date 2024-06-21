const express = require('express');
const clienteController = require('../controllers/clienteController');

const router = express.Router();

router
    .route('/')
    .get(clienteController.getAllClientes)
    .post(clienteController.createCliente);

router
    .route('/:id')
    .get(clienteController.getClienteByID)
    .delete(clienteController.deleteCliente)
    .patch(clienteController.updateClienteNome);

router
    .route('/nome/:nome')
    .get(clienteController.getClienteByNome);

module.exports = router;