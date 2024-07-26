exports.detail = (req, res, next) => {
    const detail = {
        title: '美团弹性伸缩系统的技术演进与落地实践',
        avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4',
        author: '美团技术团队',
        time: '2020-07-01',
        read: 23423,
        star: 23432,
        keywords: ['devops', '编程', '分布式'],
        content: '<b>弹性伸缩具有应突发、省成本。自动化的业务价值。平台侧将各业务零散、闲五资源进行整合，形成一个大规模资源池，通过弹性调度、库存管控技术在公司运营成本和业务体感中寻求较好的平衡。</b>',
        like: 234,
        isStart: false,
        isLike: false,
        isBad: false
    }
    const commentList = [
        {
            id: 1,
            author: '舟舟今天学习了吗',
            avatar: 'https://picsum.photos/35',
            time: '2020-07-01',
            content: '弹性伸缩具有应突发、省成本。',
            like: 234,
            isLike: false,
            isBad: false,
            reply: [
                {
                    id: 2,
                    author: '舟舟今天学习了吗',
                    avatar: 'https://picsum.photos/35',
                    time: '2020-07-01',
                    content: '弹性伸缩具有应突发、省成本。',
                    like: 234,
                    isLike: false,
                    isBad: false,
                }
            ]
        }, {
            id: 3,
            author: '舟舟今天学习了吗',
            avatar: 'https://picsum.photos/35',
            time: '2020-07-01',
            content: '弹性伸缩具有应突发、省成本。',
            like: 234,
            isLike: false,
            isBad: false,
            reply: [
                {
                    id: 4,
                    author: '舟舟今天学习了吗',
                    avatar: 'https://picsum.photos/35',
                    time: '2020-07-01',
                    content: '弹性伸缩具有应突发、省成本。',
                    like: 234,
                    isLike: false,
                    isBad: false,
                }
            ]
        },
    ]
    const recommendRelatedList = [
        {
            id: 1,
            title: '美团图数据库平台建设及业务实践',
            content: '总第442篇2021年 第012篇图数据结构，能够更好地表征现实世界。美团业务相对较复杂，存在比较多的图数据存储及多跳查询需求，亟需一种组件来对千总第441篇2021年 第011篇高质量模型的设计和更新迭代是当前 AI 生产开发的痛点和难点。',
            read: 234,
        }, {
            id: 2,
            title: '美团图数据库平台建设及业务实践',
            content: '总第442篇2021年 第012篇图数据结构，能够更好地表征现实世界。美团业务相对较复杂，存在比较多的图数据存储及多跳查询需求，亟需一种组件来对千总第441篇2021年 第011篇高质量模型的设计和更新迭代是当前 AI 生产开发的痛点和难点。',
            read: 234,
        }, {
            id: 3,
            title: '美团图数据库平台建设及业务实践',
            content: '总第442篇2021年 第012篇图数据结构，能够更好地表征现实世界。美团业务相对较复杂，存在比较多的图数据存储及多跳查询需求，亟需一种组件来对千总第441篇2021年 第011篇高质量模型的设计和更新迭代是当前 AI 生产开发的痛点和难点。',
            read: 234,
        },
    ]
    const recommendAuthorsList = [
        {
            id: 1,
            name: 'credreamer',
            job: '职业',
            articles: 12312,
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        }, {
            id: 2,
            name: 'credreamer',
            job: '职业',
            articles: 12312,
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        }, {
            id: 3,
            name: 'credreamer',
            job: '职业',
            articles: 12312,
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
    ]
    const chatList = [
        {
            id: 1,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 11:45:26',
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
        {
            id: 2,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-06-22 11:45:26',
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
        {
            id: 3,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2023-07-22 11:45:26',
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
        {
            id: 4,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 10:45:26',
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
        {
            id: 5,
            name: 'JAVA交流组织',
            content: 'java天下第一',
            time: '2024-07-22 12:45:26',
            avatar: "https://avatars2.githubusercontent.com/u/11473707?s=460&v=4"
        },
    ]
    const blog = {name: '华为开发者论坛', img: 'https://picsum.photos/90'}
    const catalogList = [
        {
            id: 1,
            title: '一级目录1',
            children: [
                {
                    id: 5,
                    title: '二级目录1',
                },
                {
                    id: 6,
                    title: '二级目录2',
                },
            ]
        }, {
            id: 2,
            title: '一级目录2',
            children: [
                {
                    id: 7,
                    title: '二级目录1',
                },
                {
                    id: 8,
                    title: '二级目录2',
                },
            ]
        }, {
            id: 3,
            title: '一级目录3',
            children: [
                {
                    id: 9,
                    title: '二级目录1',
                },
                {
                    id: 10,
                    title: '二级目录2',
                },
            ]
        }, {
            id: 4,
            title: '一级目录4',
            children: [
                {
                    id: 11,
                    title: '二级目录1',
                },
                {
                    id: 12,
                    title: '二级目录2',
                },
            ]
        },
    ]
    res.render('detail/detail', {
        detail, commentList, recommendRelatedList, recommendAuthorsList, chatList, blog, catalogList
    });
};
