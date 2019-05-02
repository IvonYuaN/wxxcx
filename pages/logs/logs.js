/*
 * 
 * WordPres微信小程序
 * author: Weyooz
 * organization: 未由时光  weyooz.cn
 * github:    https://github.com/weyooz/wxxcx
 * Copyright (c) 2019 https://weyooz.cn All Rights Reserved.
 * 
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
