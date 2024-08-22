exports.community = (req, res, next) => {
    /*
    type:1 论坛 2 视频
     */
    const communityList = [
        {
            id: 1,
            title: '这是一个帖子标题',
            img: 'https://picsum.photos/230/90',
            author: 'color',
            view: '2.9万',
            avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4',
            type: '1'
        }, {
            id: 2,
            title: '这是一个帖子标题',
            img: 'https://picsum.photos/230/90',
            author: 'color',
            view: '2.9万',
            avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4',
            type: '1'
        }, {
            id: 3,
            title: '这是一个帖子标题',
            img: 'https://picsum.photos/230/90',
            author: 'color',
            view: '2.9万',
            avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4',
            type: '2'
        }, {
            id: 4,
            title: '这是一个帖子标题',
            img: 'https://picsum.photos/230/90',
            author: 'color',
            view: '2.9万',
            avatar: 'https://avatars2.githubusercontent.com/u/11473707?s=460&v=4',
            type: '1'
        },
    ]
    const images = ['https://picsum.photos/470/371', 'https://picsum.photos/470/371', 'https://picsum.photos/470/371']
    const hotList = [
        {id: 1, type: 1, img: 'https://picsum.photos/470/371', title: '文章标题'},
        {id: 1, type: 1, img: 'https://picsum.photos/470/371', title: '文章标题'},
        {id: 1, type: 1, img: 'https://picsum.photos/470/371', title: '文章标题'},
        {id: 1, type: 1, img: 'https://picsum.photos/470/371', title: '文章标题'}
    ]
    res.render('community/community', {communityList, images, hotList});
};
exports.communityForum = (req, res, next) => {
    res.render('community/communityForum');
};
exports.communityVideo = (req, res, next) => {
    res.render('community/communityVideo');
};
