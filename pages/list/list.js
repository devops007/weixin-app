// pages/list/list.js
const app = getApp()
//const fetch = require('../../utils/fetch')
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
  /*
  loadMore() {
    let { pageIndex, pageSize, searchText } = this.data
    const params = { _page: ++pageIndex, _limit: pageSize }
    if (searchText) params.q = searchText

    return fetch(`/categories/${this.data.category.id}/shops`, params)
      .then(res => {
        const totalCount = parseInt(res.header['X-Total-Count'])
        const hasMore = this.data.pageIndex * this.data.pageSize < totalCount
        const shops = this.data.shops.concat(res.data)
        this.setData({ shops, totalCount, pageIndex, hasMore })
    }) 
  },
  */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const trees = [
      {
        id: 1,
        image: '/images/lists/xiangzhang.jpg',
        name: "香樟",
        description: ["米径:15-16cm", "高度:40-50cm"],
        count: "2000",
        price: 999
      },
      {
        id: 2,
        image: '/images/lists/jushu.jpg',
        name: "榉树",
        description: ["高度:15-20cm", "胸径:10-11cm"],
        count: "881",
        price: 1000
      },
      {
        id: 3,
        image: '/images/lists/zhuzi.jpg',
        name: "竹子",
        description: ["冠幅:70-80cm", "米径:0.8-6cm", "高度:0.8-8m"],
        count: "100万",
        price: 5.00
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
  onPullDownRefresh: function () {
    this.setData({ shops: [], pageIndex: 0, hasMore: true })
    this.loadMore().then(() => wx.stopPullDownRefresh())
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // TODO：节流
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
  /*
  showSearchHandle() {
    this.setData({ searchShowed: true })
  },
  hideSearchHandle() {
    this.setData({ searchText: '', searchShowed: false })
  },
  clearSearchHandle() {
    this.setData({ searchText: '' })
  },
  searchChangeHandle(e) {
    this.setData({ searchText: e.detail.value })
  }*/

})