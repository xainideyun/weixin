//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bg_img: 'http://ozlrrk52c.bkt.clouddn.com/wx/wish.jpg',
    tree_img: '../../images/wish_active.png',
    cards_text_share: '',
    cards_share: '',
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
  bindButtonTap: function() {
    this.setData({
      cards_text_share: '',
      cards_share: '',
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea);
    this.setData({
      cards_text_share: 'cards_text_share',
      cards_share: e.detail.value.textarea

    });
    wx.showModal({
      title: '已保存',
      content: '点击右上角可把愿望或贺卡发给你的好友哦~',
      showCancel: false
    });
    wx.setStorage({
      key:"happy",
      data: e.detail.value.textarea
    })
  },
  onLoad: function () {
  },
  onShareAppMessage: function (e) {
    return {
        title: '圣诞快乐~',
        desc: '',
        imageUrl: 'http://ozlrrk52c.bkt.clouddn.com/wx/1.jpg',
        path: '/pages/happy/happy'
    }
  }
})
