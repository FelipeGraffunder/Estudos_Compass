const express = require('express');
const cidadeController = require('../controllers/cidadeController');

const router = express.Router();

router
    .route('/')
    .get(cidadeController.getAllCidades)
    .post(cidadeController.createCidade);

router
    .route('/nome/:nome')
    .get(cidadeController.getCidadeByNome);

router
    .route('/estado/:estado')
    .get(cidadeController.getCidadeByEstado);


module.exports = router;