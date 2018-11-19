//index.js
//获取应用实例

import store from '../../utils/store.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [{
      imgurl: '../../img/tuijian/nubiaX.png',
      title: '努比亚'
    }, {
      imgurl: '../../img/tuijian/magic2.png',
      title: '荣耀'
    }, {
      imgurl: '../../img/tuijian/xiaomiMIX3.png',
      title: '小米'
    }, {
      imgurl: '../../img/tuijian/iphoneXS.png',
      title: '苹果'
    }, {
      imgurl: '../../img/tuijian/meizu16.png',
      title: '魅族'
    }, {
      imgurl: '../../img/tuijian/oppo.png',
      title: 'OPPO'
    }, {
      imgurl: '../../img/tuijian/vivo.png',
      title: 'VIVO'
    }, {
      imgurl: '../../img/tuijian/samsung.png',
      title: '三星'
    }],
    // 显示指示点
    indicatorDots: true,
    // 自动轮播
    autoplay: true,
    // 循环轮播
    circular: true,
    // 指示点颜色
    indicatorColor: "#c9c9c9",
    // 指示点选择时颜色
    indicatorActiveColor: "#ffffff",
    interval: 3000,
    duration: 1000,

    //navimg
    imgnav: [
      "../../img/tuijian/android1.png",
      "../../img/tuijian/apple1.png",
      "../../img/tuijian/parts1.png",
      "../../img/tuijian/pc1.png"
    ],

    pagesNum: 1
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../anli/logs'
    })
  },

  debug: true,

  //banner
  changeProperty: function(e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  // news
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    var pagesNum = that.data.pagesNum+1;
    that.setData({
      pagesNum: pagesNum
    });
    wx.showLoading({
      title: '加载中',
    });
    // 请求后台，获取下一页的数据。
    if (that.data.pagesNum<4) {
      wx.request({
        url: "http://mobile.163.com/special/index_datalist" + '_0' + that.data.pagesNum,
        data: {
          callback: 'data_callback',
        },
        success: function (res) {
          var str = res.data;
          var str1 = str.slice(14);
          var obj = str1.substr(0, str1.length - 1);
          var arr = JSON.parse(obj);
          if (res) {
            wx.hideLoading();
            store.emit("onReachBottom", {
              name: arr
            })
          }
        },
      })
    }else{
      wx.hideLoading();
      wx.showToast({
        title: '已加载全部数据！',
        icon: 'none',
        duration: 1000,
      })
    }
  }
})