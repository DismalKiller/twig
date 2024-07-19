var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
// 登录
router.get('/login', function (req, res, next) {
    res.render('login/login');
});
router.get('/register', function (req, res, next) {
    res.render('login/register');
});
router.get('/forgetEmail', function (req, res, next) {
    res.render('login/forgetEmail');
});
router.get('/changePassword', function (req, res, next) {
    res.render('login/changePassword');
});
module.exports = router;
