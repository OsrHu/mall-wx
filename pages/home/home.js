const {Theme} = require("../../model/theme");

Page({


  data: {
    topTheme:null,
  },

  onLoad: async function (options) {
    const data = await Theme.getHomeLocationA()
    console.log(data)
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