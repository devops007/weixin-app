// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/avatar.jpg",
    company: "新勝志坤树木种植场",
    phone: "186-0625-8988",
    address: "浙江嘉兴市秀洲区志坤树木种植场",
    email: "Chom_chang@163.com",
    imagelist: ["http://res.cloudinary.com/devops007/image/upload/v1535941009/Tree-Show/Profile/QR_code.jpg"]
  },

  phoneCall: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone ,
      success: function() {
        console.log("打电话成功")
      }
    })
  },

  previewImage: function(e) {
    wx.previewImage({
      current: this.data.imagelist,
      urls: this.data.imagelist
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})