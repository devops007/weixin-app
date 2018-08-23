// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tree: {},
    stars: [0, 1, 2, 3, 4],
    noStar: '/images/stars/no-star.png',
    fullStar: '/images/stars/full-star.png',
    halfStar: '/images/stars/half-star.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const trees = [
      {
        id: 1,
        name: "香樟",
        price: "1000.00",
        count: "100万",
        stars: 4.5,
        imgpath: "/images/trees/xiangzhang/header.jpg",
        imgshow: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"],
        description:"樟树，又称香樟树，别名：香樟、樟木、瑶人柴、栳樟、臭樟、乌樟；拉丁文名：Cinnamomum camphora (L.) Presl，属樟科、属常绿大乔木，高达10米—55米左右，直径可达3米，树冠广卵形；树冠广展，枝叶茂密，气势雄伟，四季常青，是我国南方城市优良的绿化树、行道树及庭荫树。"
      },
      {
        id: 2,
        name: "榉树",
        price: "3000",
        count: "200万",
        stars: 3.5,
        imgpath: "/images/trees/jushu/header.jpg",
        imgshow: ["011", "012", "013", "014", "015", "016", "017", "018", "019", "020"],
        description: "乔木，高达30米，胸径达100厘米；树皮灰白色或褐灰色，呈不规则的片状剥落；当年生枝紫褐色或棕褐色，疏被短柔毛，后渐脱落；叶薄纸质至厚纸质，大小形状变异很大，卵形、椭圆形或卵状披针形，长2-9厘米，宽1-4厘米，先端渐尖或尾状渐尖，基部有的稍偏斜，稀圆形或浅心形，边缘有圆齿状锯齿，具短尖头，侧脉8-14对；上面中脉凹下被毛，下面无毛。叶柄长4-9毫米，被短柔毛。"
      },
      {
        id: 3,
        name: "竹子",
        price: "300",
        count: "1.7万",
        stars: 5,
        imgpath: "/images/trees/zhuzi/header.jpg",
        imgshow: ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030"],
        description: "竹子，又名竹。品种繁多，有箭竹（Arrow Bamboo）等。多年生禾本科竹亚科植物，茎为木质，是禾本科的一个分支，学名 Bambusoideae（Bambusaceae或Bamboo），在热带、亚热带地区，东亚、东南亚和印度洋及太平洋岛屿上分布最集中，种类很多，有的低矮似草，有的高如大树，生长迅速。"
      }
    ]
    
    var tree = {
      id: -1,
      name: "暂未供应",
      price: "0",
      count: "0",
      stars: 0,
      imgpath: "/images/trees/404.jpg"
    }
    
    if (options.item < 4) {
        tree = trees[options.item-1]
    }
    this.setData({ tree })
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