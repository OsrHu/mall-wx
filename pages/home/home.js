const {Theme} = require("../../model/theme");
const {Banner} = require("../../model/banner");

Page({


  data: {
    themeA:null,
    themeB:null,
  },

  async onLoad(options) {
    this.initAllData()
  },

  async initAllData() {
    const themeA = await Theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    this.setData({
      themeA:themeA[0],
      bannerB:bannerB[0]
    })

  },


  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})