const express = require('express');
const router = express.Router();


const appController = require('../controllers/app_controller');

router.get('/',appController.app);


module.exports=router;