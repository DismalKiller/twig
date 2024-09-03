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
//文章详情
const detailController = require('../controller/pages/detail.js');
router.get('/detail', detailController.detail);
//个人主页
const userController = require('../controller/pages/user.js');
router.get('/user', userController.user);
//社区
const communityController = require('../controller/pages/community.js');
router.get('/community', communityController.community);
router.get('/community/video', communityController.communityVideo);
router.get('/community/forum', communityController.communityForum);
//我的
const profileController = require('../controller/pages/profile.js');
router.get('/profile', profileController.profile);
router.get('/profile/video', profileController.profileVideo);
router.get('/profile/forum', profileController.profileForum);
module.exports = router;
