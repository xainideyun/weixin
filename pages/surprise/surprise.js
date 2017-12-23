var app = getApp()
Page({
  data: {
    image: 'http://ozlrrk52c.bkt.clouddn.com/wx/top_bg.png',
    animationData: {},
    awardsList: {},
    List: [],
    btnDisabled: ''
  },
  gotoList: function() {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  getLottery: function () {
    var that = this
    var awardIndex = Math.random() * 6 >>> 0;

    // 获取奖品配置
    var awardsConfig = app.awardsConfig
    if (awardIndex < 2) 
    awardsConfig.chance = false
    // console.log(awardsConfig.awards[awardIndex].name)
    that.data.List.push(awardsConfig.awards[awardIndex].name)
    wx.setStorage({
      key:"list",
      data: that.data.List
    })

    // 初始化 rotate
    var animationInit = wx.createAnimation({
      duration: 1
    })
    this.animationInit = animationInit;
    animationInit.rotate(0).step()
    this.setData({
      animationData: animationInit.export(),
      btnDisabled: 'disabled'
    })

    // 旋转抽奖
    setTimeout(function() {
      var animationRun = wx.createAnimation({
        duration: 4000,
        timingFunction: 'ease'
      })
      that.animationRun = animationRun
      animationRun.rotate(360 * 8 - awardIndex * (360 / 6)).step()
      that.setData({
        animationData: animationRun.export()
      })
    }, 100)

    // 中奖提示
    setTimeout(function() {
      wx.showModal({
        title: '恭喜',
        content: '获得' + (awardsConfig.awards[awardIndex].name) + '哦~',
        showCancel: false
      })
      // if (awardsConfig.chance) {
        that.setData({
          btnDisabled: ''
        })  
      // }
    }, 4100);
    
 
 
  },
  onReady: function (e) {

    var that = this;

    // getAwardsConfig
    app.awardsConfig = {
      chance: true,
      awards:[
        {'index': 0, 'name': '一只玩偶', 'img': '../../images/surprise_active.png'},
        {'index': 1, 'name': '一棵圣诞树', 'img': '../../images/surprise_active.png'},
        {'index': 2, 'name': '一只火鸡', 'img': '../../images/surprise_active.png'},
        {'index': 3, 'name': '一把糖果', 'img': '../../images/surprise_active.png'},
        {'index': 4, 'name': '一朵雪花', 'img': '../../images/surprise_active.png'},
        {'index': 5, 'name': '一顶圣诞帽', 'img': '../../images/surprise_active.png'}
      ]
    }
    // 绘制转盘
    var awardsConfig = app.awardsConfig.awards,
        len = awardsConfig.length,
        rotateDeg = 360 / len / 2 + 90,
        html = [],
        turnNum = 1 / len  // 文字旋转 turn 值
    that.setData({
      btnDisabled: app.awardsConfig.chance ? '' : 'disabled'  
    })
    for (var i = 0; i < len; i++) {
       // 奖项列表
       html.push({turn: i * turnNum + 'turn', award: awardsConfig[i].img});    
      }
      that.setData({
          awardsList: html
        });


  }

})