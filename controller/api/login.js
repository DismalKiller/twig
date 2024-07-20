const Result = require('./result.js');

exports.login = (req, res, next) => {
    res.json(Result.ok(req.body));
};
exports.register = (req, res, next) => {
    res.json(Result.build(req.body, 200, '注册成功'));
};
exports.sendEmail = (req, res, next) => {
    res.json(Result.fail(req.body));
};
exports.changePassword = (req, res, next) => {
    res.json(Result.ok(req.body));
};
