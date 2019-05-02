/*
 * 
 * WordPres微信小程序
 * author: Weyooz
 * organization: 未由时光  weyooz.cn
 * github:    https://github.com/weyooz/wxxcx
 * Copyright (c) 2019 https://weyooz.cn All Rights Reserved.
 * 
 */


App({
    
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    

    
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    openid:'',
    isGetUserInfo:false,
    isGetOpenid:false

  }
})