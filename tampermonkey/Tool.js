// ==UserScript==
// @name         RainForest 番茄阅读助手
// @namespace    https://books.rainforest.org.cn/
// @version      0.1
// @description  一键到 RainForest 番茄阅读助手 阅读小说。
// @author       RainForest
// @match        https://fanqienovel.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fanqienovel.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 注入 CSS
    var style = document.createElement('style');
    style.innerHTML = `
    .rainforest {
    bottom: 0;
    left: 0;
    }
    `;
    // 获取当前页面的 URL
    var url = window.location.href;
    // 获取URL中的数字
    var num = url.match(/\d+/g);
    // 创建变量
    var newUrl = 'https://books.rainforest.org.cn/?bookId=' + num; // 书籍详情页

    // 创建一个a标签
    var a = document.createElement('a');
    a.className = '';
    a.style = '';
    // 设置 a 标签的 href 属性
    a.href = newUrl;

    // 创建一个div标签
    var div = document.createElement('div');
    div.className = 'float-wrapper-item float-wrapper-helper';

    // 设置div的innerHTML为SVG代码
    div.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="6.25" fill="#000F99"/>
            <path d="M13.1119 11.7833C13.9859 10.9572 14.5312 9.78708 14.5312 8.48956C14.5312 5.98702 12.5025 3.95831 10 3.95831H6.67708C6.25413 3.95831 6.04265 3.95831 5.8811 4.04063C5.739 4.11303 5.62347 4.22856 5.55106 4.37066C5.46875 4.53221 5.46875 4.74369 5.46875 5.16665V14.8333C5.46875 15.2563 5.46875 15.4677 5.55106 15.6293C5.62347 15.7714 5.739 15.8869 5.8811 15.9593C6.04265 16.0416 6.25413 16.0416 6.67708 16.0416H12.8549C13.4209 16.0416 13.7039 16.0416 13.8897 15.9232C14.0523 15.8194 14.169 15.6574 14.216 15.4704C14.2697 15.2567 14.1802 14.9882 14.0012 14.4512L13.1119 11.7833Z" fill="white"/>
        </svg>
    `;

    // 创建另外一一个div标签
    var div2 = document.createElement('div');
    div2.className = '';
    div2.textContent = '阅读助手';

    // 按照a > div > svg + div的顺序 包裹元素
    a.appendChild(div);
    div.appendChild(div2);

    // 找到要插入按钮的 div.float-wrapper 元素
    var divInfo = document.querySelector('div.float-wrapper');

    // 将按钮插入到 div.info 中
    if (divInfo) {
        divInfo.appendChild(a);
    }
})();