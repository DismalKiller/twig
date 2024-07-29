exports.user = (req, res, next) => {
    const info = {
        name: '南山秋木',
        phone: '13xxx',
        email: 'xx@xx',
        school: '清华',
        company: "腾讯",
        avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4'
    }
    const hobby = ['java']
    const statistics = {
        visits: 28352, articles: 234, views: 23131, likes: 31232, fans: 21313
    }
    const blogList = [
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
    res.render('user/user', {info, hobby, statistics, blogList});
};
