var express = require('express');
var router = express.Router();


// 登录
const loginController = require('../controller/api/login.js');
router.post('/login', loginController.login);
router.post('/register', loginController.register);
router.post('/forgetEmail', loginController.sendEmail);
router.post('/changePassword', loginController.changePassword);


module.exports = router;
