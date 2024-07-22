const dayjs = require('dayjs')
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

exports.home = (req, res, next) => {
    const total = 800
    const homeList = {
        rows: [
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
            }],
        total,
        totalPage: total / (req.query.pageSize || 10),
        currentPage: req.query.pageNum || 1,
        pageSize: req.query.pageSize || 10,
    }
    const categories = {
        rows: [
            '推荐', '动态', '排行榜', '程序人生', 'Python', 'Java', '人工智能', '前端', '架构', '区块链',
            '数据库', '5G技术', '游戏开发', '运维', '网络安全', '云计算', '大数据', '研发管理', '物联网', '计算机基础',
        ],
        current: req.query.category
    }
    const rankList = [
        {
            id: 1,
            title: '微信小程序开发游戏教程（附详细资料',
            author: '云开发创作者',
            read: 98765,
        }, {
            id: 2,
            title: '看电影学编程：人理解迭代，神理解递归',
            author: '网易互娱',
            read: 87654,
        }, {
            id: 3,
            title: '前端技术变革：前端设计模式演变',
            author: 'CSDN社区',
            read: 76543,
        }, {
            id: 4,
            title: '华为云TechWave全球技术峰会',
            author: '高校俱乐部',
            read: 65432,
        }, {
            id: 5,
            title: 'Unity3D的自学之路',
            author: '云开发创作者',
            read: 54321,
        }, {
            id: 6,
            title: '全国大学生计算机系统能力大赛',
            author: '云开发创作者',
            read: 43210,
        }, {
            id: 7,
            title: '为什么Windows比Mac更容易中毒',
            author: '云开发创作者',
            read: 32109,
        }]
    const chatList = [
        {
            id: 1,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 11:45:26',
            img: 'https://picsum.photos/35'
        },
        {
            id: 2,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-06-22 11:45:26',
            img: 'https://picsum.photos/35'
        },
        {
            id: 3,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2023-07-22 11:45:26',
            img: 'https://picsum.photos/35'
        },
        {
            id: 4,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 10:45:26',
            img: 'https://picsum.photos/35'
        },
        {
            id: 5,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 12:45:26',
            img: 'https://picsum.photos/35'
        },
    ]
    const blog = {name: '华为开发者论坛', img: 'https://picsum.photos/90'}
    chatList.forEach(item => {
        item.time = dayjs(item.time).fromNow()
    })
    homeList.rows[0].title = categories[req.query.category - 1] || categories[0]
    res.render('index', {
        categories, homeList, rankList, chatList, blog
    });
};
