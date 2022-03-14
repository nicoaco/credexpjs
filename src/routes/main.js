const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');



router.get('/', mainController.index);
router.get('/nosotros', mainController.nosotros);
router.get('/contacto', mainController.contacto);
router.get('/servicios', mainController.servicios);
//router.get('/asociados', mainController.asociados);

module.exports = router;