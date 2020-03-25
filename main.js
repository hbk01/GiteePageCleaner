// ==UserScript==
// @name         Gitee页面清理
// @namespace    https://github.com/hbk01/GiteePageCleaner
// @version      0.1
// @description  Gitee 作为国内的网站，总是喜欢在页面里添加一些花里胡哨的东西，我不想看到它们！
// @author       黑白课
// @match        https://gitee.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.URL.startsWith("https://gitee.com/")) {
        log("this page is gitee's, run clean.");
        cleanList = [
            "ui red label", // 企业版的“特惠” 标识
        ];
        for (var i = 0; i < cleanList.length; i++){
            log("Remove " + cleanList[i]);
            clean(document.getElementsByClassName(cleanList[i])[0]);
        }
    }
})();

function clean(element){
    element.remove();
}

function log(msg){
    console.log("Gitee Cleaner: " + msg);
}
