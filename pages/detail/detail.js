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
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/xiangzhang.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511833/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_001.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511832/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_002.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511832/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_003.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511832/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_004.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511832/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_005.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511832/Tree-Show/%E9%A6%99%E6%A8%9F/xiangzhang_006.png"
        ],
        description:"樟树，又称香樟树，别名：香樟、樟木、瑶人柴、栳樟、臭樟、乌樟；拉丁文名：Cinnamomum camphora (L.) Presl，属樟科、属常绿大乔木，高达10米—55米左右，直径可达3米，树冠广卵形；树冠广展，枝叶茂密，气势雄伟，四季常青，是我国南方城市优良的绿化树、行道树及庭荫树。"
      },
      {
        id: 2,
        name: "榉树",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/jushu.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511763/Tree-Show/%E6%A6%89%E6%A0%91/jushu_001.png"
        ],
        description: "乔木，高达30米，胸径达100厘米；树皮灰白色或褐灰色，呈不规则的片状剥落；当年生枝紫褐色或棕褐色，疏被短柔毛，后渐脱落；叶薄纸质至厚纸质，大小形状变异很大，卵形、椭圆形或卵状披针形，长2-9厘米，宽1-4厘米，先端渐尖或尾状渐尖，基部有的稍偏斜，稀圆形或浅心形，边缘有圆齿状锯齿，具短尖头，侧脉8-14对；上面中脉凹下被毛，下面无毛。叶柄长4-9毫米，被短柔毛。"
      },
      {
        id: 3,
        name: "广玉兰",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/guangyulan.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511361/Tree-Show/%E5%B9%BF%E7%8E%89%E5%85%B0/guangyulan_001.png"
        ],
        description: "常绿乔木，高达40米。树皮灰褐色；幼枝密生绒毛，后变灰褐色。叶厚，革质，长圆状披针形或倒卵状长椭圆形，长14-20厘米，宽4-9厘米，背面有锈色短绒毛；叶柄长约2厘米，嫩时有淡黄色绒毛。花白色，荷花状，直径15—20厘米，芳香；花柄密生淡黄色绒毛；花被片9—13，倒卵形，长7-8厘米；心皮密生长绒毛。聚合果圆柱形，长6—8厘米，有锈色绒毛；蓇葖果卵圆形，紫褐色，顶端有外弯的喙。花期6月。"
      },
      {
        id: 4,
        name: "垂柳",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/chuiliu.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511314/Tree-Show/%E5%9E%82%E6%9F%B3/chuiliu_001.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511314/Tree-Show/%E5%9E%82%E6%9F%B3/chuiliu_002.png"
        ],
        description: "高大落叶乔木，分布广泛，生命力强。是常见的树种之一，垂柳也是园林绿化中常用的行道树，观赏价值较高，成本低廉，深受各地绿化喜爱。主要分布浙江，湖南，江苏，安徽等地。小枝细长下垂，淡黄褐色。叶互生，披针形或条状披针形，长8～16cm，先端渐长尖，基部楔形，无毛或幼叶微有毛，具细锯齿，托叶披针形。雄蕊2，花丝分离，花药黄色，腺体2。雌花子房无柄，腺体1。花期3～4月；果熟期4～6月。"
      },
      {
        id: 5,
        name: "桂花",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/guihua.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511392/Tree-Show/%E6%A1%82%E8%8A%B1/guihua_001.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511392/Tree-Show/%E6%A1%82%E8%8A%B1/guihua_002.png"
        ],
        description: "桂花是中国传统十大名花之一，集绿化、美化、香化于一体的观赏与实用兼备的优良园林树种，桂花清可绝尘，浓能远溢，堪称一绝。尤其是仲秋时节，丛桂怒放，夜静轮圆之际，把酒赏桂，陈香扑鼻，令人神清气爽。在中国古代的咏花诗词中，咏桂之作的数量也颇为可观。自古就深受中国人的喜爱，被视为传统名花。"
      },
      {
        id: 6,
        name: "紫薇",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/ziwei.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511790/Tree-Show/%E7%B4%AB%E8%96%87/ziwei_001.png"
        ],
        description: "紫薇树姿优美，树干光滑洁净，花色艳丽；开花时正当夏秋少花季节，花期长，故有“百日红”之称，又有“盛夏绿遮眼，此花红满堂”的赞语，是观花、观干、观根的盆景良材；根、皮、叶、花皆可入药。"
      },
      {
        id: 7,
        name: "黄山栾",
        price: "电话商议",
        count: "树源充足",
        stars: 5,
        imgpath: "/images/header/huangshanluan.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535511851/Tree-Show/%E9%BB%84%E5%B1%B1%E6%A0%BE%E6%A0%91/huangshanluan_001.png",
          "http://res.cloudinary.com/devops007/image/upload/v1535511851/Tree-Show/%E9%BB%84%E5%B1%B1%E6%A0%BE%E6%A0%91/huangshanluan_002.png"
        ],
        description: "落叶乔木，高可达20余米；皮孔圆形至椭圆形；枝具小疣点。叶平展，二回羽状复叶。花又为黄色染料。木材可制家具；根入药，有消肿、止痛、活血、驱蛔之功，具有治风热咳嗽，花能清肝明目，清热止咳。分布于长江流域以南及西南诸省及华北地区。"
      },
      {
        id: 8,
        name: "无患子",
        price: "电话商议",
        count: "树源充足",
        stars: 4.5,
        imgpath: "/images/header/wuhuanzi.jpg",
        imgshow: [
          "http://res.cloudinary.com/devops007/image/upload/v1535523846/Tree-Show/%E6%97%A0%E6%82%A3%E5%AD%90/wuhuanzi_001.jpg",
          "http://res.cloudinary.com/devops007/image/upload/v1535523846/Tree-Show/%E6%97%A0%E6%82%A3%E5%AD%90/wuhuanzi_002.jpg",
          "http://res.cloudinary.com/devops007/image/upload/v1535523846/Tree-Show/%E6%97%A0%E6%82%A3%E5%AD%90/wuhuanzi_003.jpg"
        ],
        description: "落叶乔木，枝开展，叶互生；无托叶；有柄；圆锥花序，顶生及侧生；花杂性，花冠淡绿色，有短爪；花盘杯状；花丝有细毛，药背部着生，两性花雄蕊小，花丝有软毛。核果球形，熟时黄色或棕黄色。种子球形，黑色，花期6～7月。果期9～10月。"
      }
    ]
    
    var tree = {
      id: -1,
      name: "暂未供应",
      price: "0",
      count: "0",
      stars: 0,
      imgpath: "/images/header/404.jpg"
    }
    
    if (options.item < 9) {
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