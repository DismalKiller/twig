var express = require('express');
var app = express();

/*api*/
app.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
app.post('/login', function (req, res, next) {
    res.json({
        code: 200,
        msg: '登录成功',
        data: req.body
    });
});
app.post('/register', function (req, res, next) {
    res.json({
        code: 200,
        msg: '注册成功',
        data: req.body
    });
});
app.post('/sendEmail', function (req, res, next) {
    res.json({
        code: 200,
        msg: '发送成功',
        data: req.body
    });
});
app.post('/changePassword', function (req, res, next) {
    res.json({
        code: 400,
        msg: '修改失败',
        data: req.body
    });
});


module.exports = app;
