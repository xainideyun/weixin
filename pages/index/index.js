//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bg_img: 'http://ozlrrk52c.bkt.clouddn.com/wx/bg.jpg',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoLottery: function() {
    wx.switchTab({
      url: '../surprise/surprise'
    })
  },
  gotoWish: function() {
    wx.switchTab({
      url: '../wish/wish'
    })
  },
 
  onLoad: function () {
    
  }
})
