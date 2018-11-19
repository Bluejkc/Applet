// components/home/news/news.js
import store from '../../../utils/store.js';
Component({
  //news
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    phone_list: [],
    // 当前页
    pageNumber: 1,
    // 总页数
    totalPage: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 加载歌单信息
    loadMore() {
      var that = this;
      wx.request({
        url: "http://mobile.163.com/special/index_datalist", //仅为示例，并非真实的接口地址
        data: {
          callback: 'data_callback',
          size: 10
        },
        header: {
          'content-type': 'text/json;charset=UTF-8' // 默认值
        },
        method: "GET",
        success(res) {
          var str = res.data;
          var str1 = str.slice(14);
          var obj = str1.substr(0, str1.length - 1);
          var arr = JSON.parse(obj);
          // console.log(arr)
          arr.map(function(e){
            // console.log(e)
          })

          that.setData({
            phone_list: arr
          })
        }
      })
    },
  },
  attached: function() {
    this.loadMore();
    console.log("life")
  },
  ready: function() {
    var that = this
    store.on("onReachBottom", (data) => {
      that.setData({
        phone_list: that.data.phone_list.concat(data.name)
      })
    })
  },


})