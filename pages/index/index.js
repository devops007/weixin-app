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
       { image: '/images/first/title-003.jpg', link: '' },
       { image: '/images/first/title-004.jpg', link: '' }
     ]

     const categories = [
       { icon: '/images/icons/grid-02.png', text: '香樟', category_id: 1 },
       { icon: '/images/icons/grid-03.png', text: '榉树', category_id: 2 },
       { icon: '/images/icons/grid-01.png', text: '广玉兰', category_id: 3 },
       { icon: '/images/icons/grid-04.png', text: '垂柳', category_id: 4 },
       { icon: '/images/icons/grid-09.png', text: '桂花', category_id: 5 },
       { icon: '/images/icons/grid-07.png', text: '紫薇', category_id: 6 },
       { icon: '/images/icons/grid-06.png', text: '黄山栾树', category_id: 7 },
       { icon: '/images/icons/grid-05.png', text: '无患子', category_id: 8 },
       { icon: '/images/icons/grid-10.png', text: '待定', category_id: 9 }
     ]
 
     this.setData({ slides, categories })
  },

  switchList(e) {
    wx.switchTab({
      url: "/pages/list/list"
    })
  },
  switchAddress(e) {
    wx.switchTab({
      url: "/pages/profile/profile"
    })
  }
})
