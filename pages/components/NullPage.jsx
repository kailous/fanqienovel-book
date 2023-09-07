// NullPage.jsx

import React from 'react';
import { useRouter } from 'next/router'; // 导入 useRouter
import styles from './css/NullPage.module.css'; // 使用相对路径导入CSS文件

const NullPage = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        // 获取输入框的值
        const inputElement = document.getElementById('bookIdInput');
        const bookId = inputElement.value;

        // 使用路由器导航到指定的 URL
        router.push(`/?bookId=${bookId}`);
    }

    return (
        <div className={styles.nullPage}>
            <header>
                <svg className={styles.logo}>
                    <use href="#logo"></use>
                </svg>
                <div className={styles.info}>
                    <h1>番茄阅读器</h1>
                    <p>一个更简单干净的番茄小说阅读器，没有广告，Web端与移动端都可以使用。</p>
                    <svg className={styles.by}>
                        <use href="#by"></use>
                    </svg>
                </div>
            </header>
            <main>
                {/*    表单*/}
                <form className={styles.form}>
                    <input id="bookIdInput" type="text" placeholder="请输入书籍ID" />
                    <button type="button" onClick={handleButtonClick}>开始阅读</button>
                </form>
                <p>输入 <span>bookId</span> 即可开始阅读</p>
            </main>
            <footer>
                <h2>bookId 获取方式</h2>
                <div className={styles.box}>
                    <p>https://fanqienovel.com/page/</p><span>123456789</span><p>?enter_from=search</p>
                </div>
                <p>找到想要读的小说链接，链接中数字的部分就是该小说的 <span>bookId</span></p>
            </footer>
        </div>
    );
};

export default NullPage;
