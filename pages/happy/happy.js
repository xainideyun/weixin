//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bg_img: 'http://ozlrrk52c.bkt.clouddn.com/wx/wish.jpg',
    card_img: 'http://ozlrrk52c.bkt.clouddn.com/wx/card.jpg',
    tree_img: '../../images/wish_active.png',
    undisplay1: 'undisplay1',
    undisplay2: '',
    focus: false,
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
  gotoCards: function() {
    this.setData({
      undisplay1: '',
      undisplay2: 'undisplay2',
    })
  },
  onLoad: function () {
      var that = this;
    wx.getStorage({
        key: 'happy',
        success: function (res) {
          console.log(res.data);
          that.setData({
            cards_share: res.data,
           })
        }
      })
  },
 
})
