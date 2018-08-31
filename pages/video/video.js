Page({
  data: {
    curr_id: '',   //当前打开的视频id
    items: [
      {
        id: 1, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_006.mp4', poster: '/images/video-show.jpg',
        info: "基地展示-01"
      },
      {
        id: 2, src: 'http://res.cloudinary.com/devops007/video/upload/v1535631863/Tree-Show/Video/tree_show_001.mp4', poster: '/images/video-show.jpg',
        info: "基地展示-02"
      }, 
      {
        id: 3, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_003.mp4', poster: '/images/video-show.jpg',
        info: "树木挖掘-01"
      },
      {
        id: 4, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_004.mp4', poster: '/images/video-show.jpg',
        info: "树木挖掘-02"
      },
      {
        id: 5, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_005.mp4', poster: '/images/video-show.jpg',
        info: "树木挖掘-03"
      },
      {
        id: 6, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_007.mp4', poster: '/images/video-show.jpg',
        info: "树木装车-01"
      },
      {
        id: 7, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_008.mp4', poster: '/images/video-show.jpg',
        info: "树木装车-02"
      },
      {
        id: 8, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_009.mp4', poster: '/images/video-show.jpg',
        info: "树木装车-03"
      },
      {
        id: 9, src: 'http://res.cloudinary.com/devops007/video/upload/v1535597097/Tree-Show/Video/tree_show_002.mp4', poster: '/images/video-show.jpg',
        info: "树木运输"
      },

    ],
  },
  onReady: function () {  //创建视频上下文对象
    this.videoContext = wx.createVideoContext('myVideo')
  },
  videoPlay(e) {
    this.setData({
      curr_id: e.currentTarget.dataset.id,
    })
    this.videoContext.play()
  }
})