// pages/me/me.js
const app = getApp()

Page({

  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgurl:{
      login:"../../img/me/login.png",
      personal:"../../img/me/personal.png",
      love:"../../img/me/love.png",
      phone:"../../img/me/phone.png",
      action:"../../img/me/action.png",
      system:"../../img/me/system.png",
      about:"../../img/me/about.png"
    },
    show:true,
    phone:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/home/index'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    console.log(e.detail)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  phone:function(){
    var that = this;
    that.setData({
      show:false
    })
  },


  confirm:function(){
    var that = this;
    var phone = '11012011988';
    that.setData({
      show:true
    })
    wx.makePhoneCall({
      phoneNumber: '11012011988',
    })
    that.setData({
      phone: phone
    })
  },
  cancel: function () {
    var that = this;
    that.setData({
      show: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})