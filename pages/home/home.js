const {Theme} = require("../../model/theme");

Page({


  data: {
    topTheme:null,
  },

  onLoad: async function (options) {
    const data = await Theme.getHomeLocationA()
    this.setData({
      topTheme:data[0]
    })

  },


  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})