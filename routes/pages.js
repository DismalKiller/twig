var express = require('express');
var router = express.Router();

// 首页
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
// 登录
const loginController = require('../controller/pages/login.js');
router.get('/login', loginController.login);
router.get('/register', loginController.register);
router.get('/forgetEmail', loginController.forgetEmail);
router.get('/changePassword', loginController.changePassword);


module.exports = router;
