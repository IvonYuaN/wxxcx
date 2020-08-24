/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * 
 *  *Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */
import config from '../../utils/config.js'
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var Auth = require('../../utils/auth.js');
var WxParse = require('../../wxParse/wxParse.js');
var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js');
var webSiteName = config.getWebsiteName;
var topNav = config.getFengRui;
var app = getApp();
Page({
    data: {
        text: "Page topic",
        topNav: topNav,
        page: 1,
    },
    onLoad: function (options) {
        Auth.setUserInfoData(this);
        Auth.checkLogin(this);
        wx.setNavigationBarTitle({
            title: '小程序'
        });
        var self = this;
         // 定时器加载动画 执行一次
         setTimeout(function() {
            self.setData({
                op: 1,
                mr:0
            })
            console.log(111)
         }, 500);
    },

    onShow: function () {
             
    },
    onShareAppMessage: function () {
        return {
            title: '分享“' + config.getWebsiteName + '”的专题栏目.',
            path: 'pages/topic/topic',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
})