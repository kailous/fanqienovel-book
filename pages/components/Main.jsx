import React from 'react';
import styles from './css/Main.module.css'; // 使用相对路径导入CSS文件
const Main = ({ chapterData }) => {
    if (!chapterData || !chapterData.content) {
        return null; // 或者可以返回一个默认的 UI，或者显示一个加载中的状态
    }
    return (
        <div className={styles.main}>
            <p
                dangerouslySetInnerHTML={{
                    __html: chapterData.content.replace(/\n/g, '<br />').replace(/　　/g, ''),
                }}
            />
        </div>
    );
};

export default Main;