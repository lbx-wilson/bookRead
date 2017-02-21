/// <reference path="../jquery/jquery.min.js" />
var _common = function () {
    this.oDom = {
        //公共头部
        head: '<div class="head-nav">' +
            '<a href="../index/index.html">' +
                '<img alt="logo" src="../../img/logo.png" />' +
            '</a>' +
            '<a href="../index/index.html">首页</a>' +
            '<a href="../stacks/stacks.html">书库</a>' +
            '<a href="../ranking/ranking.html">排行</a>' +
            '<a href="../recharge/recharge.html">充值</a>' +
        '</div>' +
        '<div class="p-info">' +
            '<div class="recent-read">' +
                '<a href="###">最近阅读</a>' +
                '<i></i>' +
                '<a href="###">我当上女婿的那些年</a>' +
            '</div>' +
            '<div class="login-btn">' +
                '<a href="###">登录</a>' +
            '</div>' +
            '<div class="login-info">' +
                '<a href="###">用户名</a>' +
                '<i></i>' +
                '<a href="###">我的书架</a>' +
                '<i></i>' +
                '<a href="###">退出</a>' +
            '</div>' +
        '</div>',
        //公共尾部
        foot: ' <div class="go-firstpage">' +
            '<a href="../index/index.html">首页</a>' +
        '</div>' +
        '<div class="app-download">' +
            '<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hzpz.beyondreader">' +
                '<img class="android" alt="logo" src="../../img/android-download.jpg" />' +
                '安卓客户端' +
            '</a>' +
            '<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hzpz.beyondreader">' +
                '<img class="ios" alt="" src="../../img/ios-download.jpg" />' +
                'IOS客户端' +
            '</a>' +
        '</div>' +
        '<div class="service">' +
            '<p class="title">客服</p>' +
            '<p>工作时间：周一到周五 9:00-18:00</p>' +
            '<p>客服邮箱：xxxxxxxxxx@qq.com</p>' +
            '<p>客服QQ：xxxxxxxxxx</p>' +
            '<p>微信公众号：xxxxxxxxxx</p>' +
            '<img alt="" src="../../img/qr-code.jpg" />' +
        '</div>' +
        '<div class="record-number">' +
            'Copyright © 2015 cyread.com All rights reserved.' +
        '</div>'
    }
}
var common = new _common();
$('body>.header').html(common.oDom.head);
$('body>.foot').html(common.oDom.foot);