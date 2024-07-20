exports.login = (req, res, next) => {
    res.render('login/login');
};
exports.register = (req, res, next) => {
    res.render('login/register');
};
exports.forgetEmail = (req, res, next) => {
    res.render('login/forgetEmail');
};
exports.changePassword = (req, res, next) => {
    res.render('login/changePassword');
};
