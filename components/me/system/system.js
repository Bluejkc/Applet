// components/me/system/system.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    system: [],
    battery: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    action: function() {
      var that = this;
      // 设备信息
      wx.getSystemInfo({
        success(res) {
          that.setData({
            system: that.data.system.concat(res)
          })
          console.log(that.data.system);
        }
      })
    }
  },
  attached: function() {
    this.action();
    console.log("life")
  },
  ready: function() {

  }
})