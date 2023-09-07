import React from 'react';
import styles from './css/bottomBar.module.css'; // 使用相对路径导入CSS文件
const BottomBar = ({ chapterData }) => {

    return (
        <div aria-hidden="true" className={styles.bottomBar}>
            {/* 判断pre_item_id是否为空 */}
            {chapterData.novel_data.pre_item_id ? (
                <a href={`/chapter?itemId=${chapterData.novel_data.pre_item_id}`}>
                    <svg className={`${styles.icon} ${styles.pre} ${styles.on}`}>
                        <use href="#go-start"></use>
                    </svg>
                </a>
            ) : (
                <span>
                <svg className={`${styles.icon} ${styles.pre} ${styles.off}`}>
                    <use href="#go-start"></use>
                </svg>
                </span>
            )}
            {/* 判断是否有下一章 */}
            {chapterData.novel_data.next_item_id ? (
                <a href={`/chapter?itemId=${chapterData.novel_data.next_item_id}`}>
                    <svg className={`${styles.icon} ${styles.next} ${styles.on}`}>
                        <use href="#go-end"></use>
                    </svg>
                </a>
            ) : (
                <span>
                <svg className={`${styles.icon} ${styles.next} ${styles.off}`}>
                    <use href="#go-end"></use>
                </svg>
                </span>
            )}
        </div>
    );
};

export default BottomBar;
