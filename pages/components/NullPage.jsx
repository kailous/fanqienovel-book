// NullPage.jsx

import React from 'react';
import {useRouter} from 'next/router'; // 导入 useRouter
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
                <div className={styles.left}>
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
                </div>
                <div className={styles.right}>
                    <svg className={`${styles.technology} ${styles.next}`}>
                        <use href="#next"></use>
                    </svg>
                    <a href="https://vercel.com/kailous/fanqienovel-book" target="_blank"
                       rel="noreferrer noopener">
                        <svg className={`${styles.technology} ${styles.vercel}`}>
                            <use href="#vercel"></use>
                        </svg>
                    </a>
                    <a href="https://github.com/kailous/fanqienovel-book" target="_blank"
                       rel="noreferrer noopener">
                        <svg className={`${styles.technology} ${styles.github}`}>
                            <use href="#Github"></use>
                        </svg>
                    </a>
                </div>
            </header>
            <main>
                {/*    表单*/}
                <form className={styles.form}>
                    <input id="bookIdInput" type="text" placeholder="请输入书籍的 bookId"/>
                    <button type="button" onClick={handleButtonClick}>开始阅读</button>
                </form>
                {/*<p>输入 <span>bookId</span> 即可开始阅读</p>*/}
            </main>
            <footer>
                <div className={styles.text}>
                    <h2>找到书籍</h2>
                    <div className={styles.box}>
                        <p>https://fanqienovel.com/</p>
                    </div>
                    <p>打开 <span>番茄小说网</span> 找到想要看的小说，记下小说的 <span>Web URL</span></p>
                </div>
                <div className={styles.text}>
                    <h2>bookId 获取方式</h2>
                    <div className={styles.box}>
                        <p>https://fanqienovel.com/page/</p><span>123456789</span><p>?enter_from=search</p>
                    </div>
                    <p>找到想要读的小说链接，链接中数字的部分就是该小说的 <span>bookId</span></p>
                </div>
                {/*<div className={styles.text}>*/}
                {/*    <h2>注意：</h2>*/}
                {/*    <p>此项目仅供学习交流，<span>请勿应用于商业用途</span>，否则产生的一切后果请自行承担。</p>*/}
                {/*</div>*/}
            </footer>
        </div>
    );
};

export default NullPage;
