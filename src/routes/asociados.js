const express = require('express');
const path = require('path');
const router = express.Router();
const asociadosController = require('../controllers/asociadosController');



router.get('/', asociadosController.asociados);
router.get('/:id', (req,res)=>res.send('bienvenido al asociado: ' + req.params.id));

module.exports = router;