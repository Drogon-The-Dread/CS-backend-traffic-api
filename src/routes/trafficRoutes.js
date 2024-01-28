const express = require('express');
const router = express.Router();
const trafficController = require('../controllers/trafficController');

router.get('/data', trafficController.getData);

module.exports = router;
