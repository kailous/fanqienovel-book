import React from 'react';
import styles from './css/TopBar.module.css'; // 使用相对路径导入CSS文件
const TopBar = ({ chapterData,bookInfo }) => {
    const { order, serial_count } = chapterData.novel_data;
    // 计算进度百分比
    const progress = ((parseInt(order) / parseInt(serial_count)) * 100).toFixed(2);

    return (
        <div className={styles.topBar}>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h1>{chapterData.novel_data.title}</h1>
                    {bookInfo && <h3>{bookInfo.book_info.book_name}</h3>}
                </div>
                <a href={`/?bookId=${chapterData.novel_data.book_id}`}>
                    <svg className={styles.icon}>
                        <use href="#hamburger-button"></use>
                    </svg>
                </a>
            </div>
            <div className={styles.box} aria-hidden="true">
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.progressText}>
                    <p className={styles.content}>{order}</p>
                    /
                    <p className={styles.full}>{serial_count}</p>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
