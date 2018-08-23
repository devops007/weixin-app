//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    slides: [],
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     const slides = [
       { image: '/images/first/title-001.jpg', link: '' },
       { image: '/images/first/title-002.jpg', link: '' },
       { image: '/images/first/title-003.jpg', link: '' }
     ]

     const categories = [
       { icon: '/images/icons/grid-01.png', text: '香樟', category_id: 1 },
       { icon: '/images/icons/grid-02.png', text: '榉树', category_id: 2 },
       { icon: '/images/icons/grid-03.png', text: '竹子', category_id: 3 },
       { icon: '/images/icons/grid-04.png', text: '樱花树', category_id: 4 },
       { icon: '/images/icons/grid-05.png', text: '桂花树', category_id: 5 },
       { icon: '/images/icons/grid-06.png', text: '榕树', category_id: 6 }
     ]
 
     this.setData({ slides, categories })
  }
})



/*
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
*/