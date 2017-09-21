//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    items:[{
      id:1,
      hash: '0370dc6dba7e165f430fa7c84e44adec',
      img:'20170705090125_0370dc6dba7e165f430fa7c84e44adec.mp4',
      tag:'可爱',
      like: 23,
      ctime:'2017-02-05'
    }, {
      id: 2,
      hash: '0370dc6dba7e165f430fa7c84e44ade2',
      img: '20170705090125_0370dc6dba7e165f430fa7c84e44adec.mp4',
      tag: '可爱,调皮,捣乱',
      like: 223,
      ctime: '2017-02-05'
    }]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
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
  }
})
