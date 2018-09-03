// pages/list/list.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: {id: 1},
    trees: [],
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: false
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const trees = [
      {
        id: 1,
        image: '/images/lists/xiangzhang.jpg',
        name: "香樟",
        description: ["胸径: 10-30cm", "全冠"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 2,
        image: '/images/lists/jushu.jpg',
        name: "榉树",
        description: ["胸径: 10-20cm", "全冠"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 3,
        image: '/images/lists/guangyulan.jpg',
        name: "广玉兰",
        description: ["胸径: 8-25cm"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 4,
        image: '/images/lists/chuiliu.jpg',
        name: "垂柳",
        description: ["胸径: 10-15cm"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 5,
        image: '/images/lists/guihua.jpg',
        name: "桂花",
        description: ["冠径: P1.5-5m"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 6,
        image: '/images/lists/ziwei.jpg',
        name: "紫薇",
        description: ["胸径: 3-8cm"],
        count: "树源充足",
        price: "电话商议"
      },      
      {
        id: 7,
        image: '/images/lists/huangshanluan.jpg',
        name: "黄山栾树",
        description: ["胸径: 10-18cm", "全冠"],
        count: "树源充足",
        price: "电话商议"
      },
      {
        id: 8,
        image: '/images/lists/wuhuanzi.png',
        name: "无患子",
        description: ["胸径: 10-18cm", "全冠"],
        count: "树源充足",
        price: "电话商议"
      }
    ]
    this.setData({trees}) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  

  /**
   * 页面上拉触底事件的处理函数
   */
  /*
  onReachBottom: function () {
    // TODO：节流
    this.loadMore()
  },
  */

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})