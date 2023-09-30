// ==UserScript==
// @name         RainForest 番茄阅读助手
// @namespace    https://books.rainforest.org.cn/
// @version      1.0
// @description  一键跳转到 Rainforest 番茄阅读器，没有广告，更纯净。 可以在网页端阅读所有章节，不过如果遇到特别喜欢的，还是建议去官方支持一下作者哈。如果遇到无法访问的问题，可能是网络原因，最近发现部分地区的网络服务商屏蔽了域名，可以尝试更换网络。（ 服务是使用 vercel 部署的，目前没有解决方法，因为众所周知的原因。 ）
// @author       RainForest
// @match        https://fanqienovel.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fanqienovel.com
// @grant        none
// ==/UserScript==

window.onload = function () {
    'use strict';

    // 获取当前页面的 URL
    const url = window.location.href;

    // 获取URL中的数字
    const num = url.match(/\d+/g);

    // SVG 图标
    const svgIcon = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="6.25" fill="#000F99"/>
            <path d="M13.1119 11.7833C13.9859 10.9572 14.5312 9.78708 14.5312 8.48956C14.5312 5.98702 12.5025 3.95831 10 3.95831H6.67708C6.25413 3.95831 6.04265 3.95831 5.8811 4.04063C5.739 4.11303 5.62347 4.22856 5.55106 4.37066C5.46875 4.53221 5.46875 4.74369 5.46875 5.16665V14.8333C5.46875 15.2563 5.46875 15.4677 5.55106 15.6293C5.62347 15.7714 5.739 15.8869 5.8811 15.9593C6.04265 16.0416 6.25413 16.0416 6.67708 16.0416H12.8549C13.4209 16.0416 13.7039 16.0416 13.8897 15.9232C14.0523 15.8194 14.169 15.6574 14.216 15.4704C14.2697 15.2567 14.1802 14.9882 14.0012 14.4512L13.1119 11.7833Z" fill="white"/>
        </svg>
    `;

    // 判断链接类型(如果链接中包含page则为书籍详情页，如果链接中包含reader则为章节内容页)
    if (url.indexOf('fanqienovel.com/page') !== -1) {
        // alert('这是书籍详情页');

        // 创建跳转链接
        const newUrl = 'https://books.rainforest.org.cn/?bookId=' + num; // 书籍详情页

        // 创建一个a标签
        const a = document.createElement('a');
        a.className = '';
        a.style = '';
        // 设置 a 标签的 href 属性
        a.href = newUrl;

        // 创建一个div标签
        const div = document.createElement('div');
        div.className = 'float-wrapper-item float-wrapper-helper';

        // 设置div的innerHTML为SVG代码
        div.innerHTML = svgIcon;

        // 创建另外一个div标签
        const div2 = document.createElement('div');
        div2.className = '';
        div2.textContent = '阅读助手';

        // 按照a > div > svg + div的顺序 包裹元素
        a.appendChild(div);
        div.appendChild(div2);

        // 找到要插入按钮的 div.float-wrapper 元素
        const divInfo = document.querySelector('div.float-wrapper');

        // 将按钮插入到 div.info 中
        if (divInfo) {
            divInfo.appendChild(a);
        }
    } else if (url.indexOf('fanqienovel.com/reader') !== -1) {
        // alert('这是章节内容页');
        // 创建点击事件函数
        function handleButtonClick() {
            window.location.href = newUrl;
        }

        // 创建跳转链接
        const newUrl = 'https://books.rainforest.org.cn/chapter?itemId=' + num; // 章节内容页

        // 找到阅读工具栏
        const toolbar = document.querySelector('#app .reader-toolbar > div');

        // 创建按钮
        const autoScrollBtn = document.createElement('div');
        autoScrollBtn.className = 'reader-toolbar-item rainforest';
        autoScrollBtn.title = '阅读助手';
        autoScrollBtn.innerHTML = svgIcon + '<div style="font-size: 12px;">阅读助手</div>';

        // 补充样式
        autoScrollBtn.style.gap = '5px';
        autoScrollBtn.style.justifyContent = 'center';
        autoScrollBtn.style.cursor = 'pointer';

        // 将按钮插入阅读工具栏
        toolbar.appendChild(autoScrollBtn);

        // 给按钮添加点击事件
        autoScrollBtn.addEventListener('click', handleButtonClick);
    }
};
