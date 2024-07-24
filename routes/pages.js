var express = require('express');
var router = express.Router();

// 首页
const homeController = require('../controller/pages/home.js');
router.get('/', homeController.home);
// 登录
const loginController = require('../controller/pages/login.js');
router.get('/login', loginController.login);
router.get('/register', loginController.register);
router.get('/forgetEmail', loginController.forgetEmail);
router.get('/changePassword', loginController.changePassword);
//详情
const detailController = require('../controller/pages/detail.js');
router.get('/detail', detailController.detail);

module.exports = router;
