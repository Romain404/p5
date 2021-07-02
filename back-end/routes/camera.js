const express = require('express');
const router = express.Router();

const cameraCtrl = require('../controllers/camera');

console.log("0000 Camera control"); 

router.get('/', cameraCtrl.getAllCameras);
router.get('/:id', cameraCtrl.getOneCamera);
router.post('/order', cameraCtrl.orderCameras);

module.exports = router;