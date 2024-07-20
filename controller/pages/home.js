exports.home = (req, res, next) => {
    const homeList = [
        {
            id: 1,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 2,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 3,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 4,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 5,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 6,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }, {
            id: 7,
            title: '鸿蒙OS起步照官网练习创建第一页面和跳转的第二页面需要注意的点',
            content: '弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。',
            author: '微信云开发',
            time: '2020-07-01',
            comment: 0,
            like: 0,
            read: 0,
            img: 'https://picsum.photos/230/90'
        }]
    const categories = [
        '推荐', '动态', '排行榜', '程序人生', 'Python', 'Java', '人工智能', '前端', '架构', '区块链',
        '数据库', '5G技术', '游戏开发', '运维', '网络安全', '云计算', '大数据', '研发管理', '物联网', '计算机基础',
    ]
    homeList[0].title = req.query.category || 1
    res.render('index', {
        categories, homeList
    });
};
