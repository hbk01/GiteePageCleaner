// ==UserScript==
// @name         Gitee页面清理
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gitee 作为国内的网站，总是喜欢在页面里添加一些花里胡哨的东西，我不想看到它们！
// @author       黑白课
// @match        https://gitee.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.URL.startsWith("https://gitee.com/")) {
        log("This page is gitee, run clean.");
        var cleanList = [
            document.getElementsByClassName("ui red label")[0], // 企业版的“特惠” 标识
            document.getElementsByClassName("side-toolbar")[0], // 左边的悬浮按钮
            document.getElementsByClassName("iconfont icon-recommend recommend-icon")[0], // "自荐" 按钮
            document.getElementsByClassName("ui large orange donate button")[0], // "捐赠" 按钮
            document.getElementsByClassName("ui gradient button repo-action left attached")[0], // "+ Pull Request" 按钮
            document.getElementsByClassName("ui gradient button repo-action right attached")[0], // "+ Issue" 按钮
            document.getElementsByClassName("ui gradient button repo-action")[2], // "挂件" 按钮
            // document.getElementsByClassName("")[0],
        ];
        for (var i = 0; i < cleanList.length; i++){
            log("Clean ['" + cleanList[i].className + "']");
            cleanList[i].remove();
        }
    }
})();

function log(msg){
    console.log("Gitee Cleaner: " + msg);
}