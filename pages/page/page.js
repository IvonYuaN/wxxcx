/*
 * 
 * WordPres版微信小程序
 * author: Weyooz
 * organization: 未由时光  weyooz.cn
 * github:    https://github.com/Weyooz/wxxcx
 * Copyright (c) 2019 https://weyooz.cn All Rights Reserved.
 * 
 */

var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    title: '页面内容',
    pageData: {},
    pagesList: {},
    hidden: false,
    wxParseData: []
  },
  onLoad: function (options) {
    this.fetchData(options.id),
      this.fetchPagesData()
  },
  fetchData: function (id) {
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url: Api.getPageByID(id, { mdrender: false }),
      success: function (response) {
        console.log(response);
        self.setData({
          pageData: response.data,
          // wxParseData: WxParse('md',response.data.content.rendered)
          wxParseData: WxParse.wxParse('article', 'html', response.data.content.rendered, self, 5)
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  },
  fetchPagesData: function () {
    var self = this;
    wx.request({
      url: Api.getPages(),
      success: function (response) {
        self.setData({
          pagesList: response.data
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  }
})
