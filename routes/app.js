const express = require('express');
const router = express.Router();


const appController = require('../controllers/app_controller');
// middleware for POST request
router.use(express.urlencoded());

router.get('/',appController.app);
router.post('/',appController.priorityNest);
// router.post('/',appController.deleteTask);


module.exports=router;